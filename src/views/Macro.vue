<template>
  <div class="macro">

    <div class="flex">

    <div>
    <div class="left">
      <p>Camera</p>
      <select v-model="camera" @change="convert">
        <option value="d90">d90</option>
        <option value="d7200">d7200</option>
        <option value="d7500">d7500</option>
      </select>
    </div>
    <div>
      <p>Magnification</p>
      <input type="number" v-model="magnification" @change="convert" />
      <input v-model="magnification" type="range" min="1" max="5" step="0.5" @change="convert">
    </div>
    <div>
      <p>Snail Width</p>
      <input type="number" v-model="snail_width" @change="convert" />
      <input v-model="snail_width" type="range" min="1" max="30" step="0.1" @change="convert">
    </div>
    <div>
      <p>Snail Height</p>
      <input type="number" v-model="snail_height" @change="convert" />
      <input v-model="snail_height" type="range" min="1" max="30" step="0.1" @change="convert">
    </div>

    <div>
      <p>Frame Zoom</p>
      <input type="number" v-model="frame.zoom" @change="convert" />
      <input v-model="frame.zoom" type="range" min="1" max="10" step="1" @change="convert">
    </div>

    <div>
      <p>Load a snail</p>
      <select @change="seeSnail($event)">
        <option value="-1">Select a snail</option>
        <option v-for="(s,i) in snails" :key="s.n" :value="i">{{s.n}}</option>
      </select>
    </div>

      </div>

      <div class="right">

      <div class="frame" :style="{'width':frame.width + 'mm','height':frame.height + 'mm'}">
        <div class="area2" :style="{'width':area.width + 'mm','height':area.height + 'mm'}"></div>
        <div class="clip" :style="{'width':frame.width + 'mm','height':frame.height + 'mm'}">
          <div class="area" :style="{'width':area.width + 'mm','height':area.height + 'mm'}"></div>
        </div>

      </div><!-- frame -->


      <div class="pixels">
          <p>{{measures.usable_w}} x {{measures.usable_h}} * note there's a rounding error here based on sensor size provided</p>
          <p>{{measures.print_w}}" x {{measures.print_h}}" @ 300dpi</p>
      </div>

    </div>
  </div>


  </div>
</template>

<script>
import axios from 'axios'
export default{
  name: 'Macro',
  data: function(){
    return {
      magnification: 1,
      snail_width: 2,
      snail_height: 2,
      screen_constant: 1.16,
      frame: {
        base_width: 0,
        base_height: 0,
        zoom: 1,
        width:0,
        height:0
      },
      area: {
        width:10,
        height:10
      },
      camera: 'd90',
      d90: {
        width: 4288,
        height: 2848,
        width_mm: 23.6,
        height_mm: 15.8
      },
      d7500: {
        width: 5600,
        height: 3733,
        width_mm: 23.5,
        height_mm: 15.7
      },
      d7200: {
        width: 6000,
        height: 4000,
        width_mm: 23.5,
        height_mm: 15.6
      },
      measures: {
        usable_w:0,
        usable_h:0,
        print_w:0,
        print_h:0
      },
      snails: []
    }
  },
  methods: {
    convert: function(){
      // set frame size on camera
      this.frame.base_width = this[this.camera].width_mm * this.screen_constant
      this.frame.base_height = this[this.camera].height_mm * this.screen_constant

      // size the frame
      this.frame.width = this.frame.base_width * this.frame.zoom * this.screen_constant
      this.frame.height = this.frame.base_height * this.frame.zoom * this.screen_constant

      // size the area
      this.area.width = this.snail_width * this.frame.zoom * this.magnification * this.screen_constant
      this.area.height = this.snail_height * this.frame.zoom * this.magnification * this.screen_constant

      // calculate pixels
      this.measures.usable_w = Math.round(this[this.camera].width/this.frame.base_width * this.snail_width * this.magnification)
      if (this.measures.usable_w > this.[this.camera].width) {
        this.measures.usable_w = this.[this.camera].width
      }

      this.measures.usable_h = Math.round(this[this.camera].height/this.frame.base_height * this.snail_height * this.magnification)
      if (this.measures.usable_h > this.[this.camera].height) {
        this.measures.usable_h = this.[this.camera].height
      }

      //calculate print size
      this.measures.print_w = ((this[this.camera].width/this.frame.base_width * this.snail_width * this.magnification)/300).toFixed(2)

      this.measures.print_h = ((this[this.camera].height/this.frame.base_height * this.snail_height * this.magnification)/300).toFixed(2)

    },
    getSnailList() {
      let ctx = this
      axios.get('./iowa-morphology.csv').then(response => {
        let data = this.$papa.parse(response.data,{
          "delimiter":",",
          header: true
        });

        data=data.data

        data.forEach(d=>{
          let obj1 = {}
          obj1.n = d.species + ' - min'
          obj1.w = d.width.split(',')[0]
          obj1.h = d.height.split(',')[0]
          if (obj1.w > 0 && obj1.h > 0) {
            ctx.snails.push(obj1)
          }
          let obj2 = {}
          obj2.n = d.species + ' - max'
          obj2.w = d.width.split(',')[1]
          obj2.h = d.height.split(',')[1]
          if (obj2.w > 0 && obj2.h > 0) {
            ctx.snails.push(obj2)
          }
        })

      })
    },
    seeSnail: function(event){
      if (event.target.value >= 0) {
        this.snail_width = this.snails[event.target.value].w
        this.snail_height = this.snails[event.target.value].h
        this.convert()
      }
    }
  },
  created(){
    this.convert()
    this.getSnailList()
  }
}
</script>

<style lang="scss">
.frame {
  border: 1px solid #efefef;
  margin-bottom: 5rem;
  position: relative;
  .area {
    position: absolute;
    background-color: green;
  }
  .clip {
    overflow: hidden;
    position:relative;
  }
  .area2 {
    position: absolute;
    background-color: #efefef;
  }
}
.right {
  display:flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
}
</style>
