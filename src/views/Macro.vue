<template>
  <div class="macro">

    <div class="flex">

    <div class="left">

    <div>
      <p>Magnification {{magnification}}:1</p>
      <input type="number" v-model="magnification" @change="convert" />
      <input v-model="magnification" type="range" min="1" max="10" step="0.5" @change="convert">
    </div>
    <div>
      <p>Snail Width</p>
      <input type="number" v-model="snail_width" @change="convert" />
      <input v-model="snail_width" type="range" min="1" max="30" step="0.1" @change="convert">
    </div>
    <div>
        <label><input v-model="diameter" type="checkbox" @change="convert" /> Use width as height</label>
    </div>
    <div>
      <p>Snail Height</p>
      <input type="number" v-model="snail_height" @change="convert" />
      <input v-model="snail_height" type="range" min="1" max="30" step="0.1" @change="convert">
    </div>

    <!-- <div>
      <p>Frame Zoom</p>
      <input type="number" v-model="zoom" @change="convert" />
      <input v-model="zoom" type="range" min="1" max="7" step="1" @change="convert">
    </div> -->

    <div>
      <p>Load a snail</p>
      <select @change="seeSnail($event)">
        <option value="-1">Select a snail</option>
        <option v-for="(s,i) in snails" :key="s.n" :value="i">{{s.n}}</option>
      </select>
    </div>

      </div>

      <div class="right cameras">

        <div class="camera" v-for="c in cameras" :key="c.name">

          <h2>{{c.name}}</h2>

          <div class="cam-info">
              <p>{{c.width_mm}}mm x {{c.height_mm}}mm</p>
              <p>{{c.width}} x {{c.height}}</p>
          </div>

          <div class="frames">

            <div class="frame" :style="{'width':c.frame.width + 'mm','height':c.frame.height + 'mm'}">
              <div class="area2" :style="{'width':c.area.width + 'mm','height':c.area.height + 'mm'}"></div>
              <div class="clip" :style="{'width':c.frame.width + 'mm','height':c.frame.height + 'mm'}">
                <div class="area" :style="{'width':c.area.width + 'mm','height':c.area.height + 'mm'}"></div>
              </div>
            </div><!-- frame -->

            <div class="frame" :style="{'width':c.frame.height + 'mm','height':c.frame.width + 'mm'}">
              <div class="area2" :style="{'width':c.area.width + 'mm','height':c.area.height + 'mm'}"></div>
              <div class="clip" :style="{'width':c.frame.height + 'mm','height':c.frame.width + 'mm'}">
                <div class="area" :style="{'width':c.area.width + 'mm','height':c.area.height + 'mm'}"></div>
              </div>
            </div><!-- frame -->

          </div>


          <div class="pixels">
              <p class="usable">{{c.measures.usable_w}} x {{c.measures.usable_h}}</p>
              <p>{{c.measures.print_w}}" x {{c.measures.print_h}}" @ 300dpi</p>
              <p>{{c.measures.percent_w}}% of width x {{c.measures.percent_h}}% of height</p>
              <p>{{c.measures.percent_img}}% of image </p>
          </div>

        </div>

    </div>
  </div>

  <div class="notes">
    <p>28mm Reversed = 2.84x magnification.</p>
    <p>28mm Reversed with extension tubes = 5.12x magnification.</p>
    <p>50mm Reversed = 0.853x magnification.</p>
    <p>50mm Reversed with extension tubes = 2.13x magnification.</p>

    <!-- <div>
      <p>d' = d - f(m'-m\m'm)<br />

where d' is the working distance with the extension tube, d is the working distance without the extension tube, m' is the magnifcation with the extension tube, and f is the focal length of the lens.</p>
    </div> -->


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
      // screen_constant: 1.16,
      screen_constant: 1,
      zoom : 1,
      diameter : false,
      cameras:[
        // {
        //   name: 'Nikon d90 APS-C (2008)',
        //   width: 4288,
        //   height: 2848,
        //   width_mm: 23.6,
        //   height_mm: 15.8,
        //   measures: {
        //     usable_w:0,
        //     usable_h:0,
        //     print_w:0,
        //     print_h:0,
        //     percent_w:0,
        //     percent_h:0,
        //     percent_img: 0
        //   },
        //   frame: {
        //     base_width: 0,
        //     base_height: 0,
        //     zoom: 1,
        //     width:0,
        //     height:0
        //   },
        //   area: {
        //     width:10,
        //     height:10
        //   },
        // },
        {
          name: 'Nikon d7200 APS-C (2015)',
          width: 6000,
          height: 4000,
          width_mm: 23.5,
          height_mm: 15.6,
          measures: {
            usable_w:0,
            usable_h:0,
            print_w:0,
            print_h:0,
            percent_w:0,
            percent_h:0,
            percent_img: 0
          },
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
          }
        },
        // {
        //   name: 'd500 APS-C (2016)',
        //   width: 5568,
        //   height: 3712,
        //   width_mm: 23.5,
        //   height_mm: 15.7,
        //   measures: {
        //     usable_w:0,
        //     usable_h:0,
        //     print_w:0,
        //     print_h:0,
        //     percent_w:0,
        //     percent_h:0,
        //     percent_img: 0
        //   },
        //   frame: {
        //     base_width: 0,
        //     base_height: 0,
        //     zoom: 1,
        //     width:0,
        //     height:0
        //   },
        //   area: {
        //     width:10,
        //     height:10
        //   },
        // },
        // {
        //   name: 'd5600 APS-C (2016)',
        //   width: 6000,
        //   height: 4000,
        //   width_mm: 23.5,
        //   height_mm: 15.6,
        //   measures: {
        //     usable_w:0,
        //     usable_h:0,
        //     print_w:0,
        //     print_h:0,
        //     percent_w:0,
        //     percent_h:0,
        //     percent_img: 0
        //   },
        //   frame: {
        //     base_width: 0,
        //     base_height: 0,
        //     zoom: 1,
        //     width:0,
        //     height:0
        //   },
        //   area: {
        //     width:10,
        //     height:10
        //   },
        // },
        // {
        //   name: 'Nikon d7500 APS-C (2017)',
        //   width: 5600,
        //   height: 3733,
        //   width_mm: 23.5,
        //   height_mm: 15.7,
        //   measures: {
        //     usable_w:0,
        //     usable_h:0,
        //     print_w:0,
        //     print_h:0,
        //     percent_w:0,
        //     percent_h:0,
        //     percent_img: 0
        //   },
        //   frame: {
        //     base_width: 0,
        //     base_height: 0,
        //     zoom: 1,
        //     width:0,
        //     height:0
        //   },
        //   area: {
        //     width:10,
        //     height:10
        //   },
        // },
        // {
        //   name: 'Canon d80 APS-C (2017)',
        //   width: 6000,
        //   height: 4000,
        //   width_mm: 22,
        //   height_mm: 15,
        //   measures: {
        //     usable_w:0,
        //     usable_h:0,
        //     print_w:0,
        //     print_h:0,
        //     percent_w:0,
        //     percent_h:0,
        //     percent_img: 0
        //   },
        //   frame: {
        //     base_width: 0,
        //     base_height: 0,
        //     zoom: 1,
        //     width:0,
        //     height:0
        //   },
        //   area: {
        //     width:10,
        //     height:10
        //   },
        // },
      ],
      snails: []
    }
  },
  methods: {
    convert: function(){
      let ctx = this

      if (ctx.diameter) {
        ctx.snail_height = ctx.snail_width
      }

      this.cameras.forEach(d=> {

        // set frame size on camera
        d.frame.base_width = d.width_mm * ctx.screen_constant
        d.frame.base_height = d.height_mm * ctx.screen_constant

        // size the frame
        d.frame.width = d.frame.base_width * ctx.zoom *ctx.screen_constant
        d.frame.height = d.frame.base_height * ctx.zoom * ctx.screen_constant

        // size the area
        d.area.width = ctx.snail_width * ctx.zoom * ctx.magnification * ctx.screen_constant
        d.area.height = ctx.snail_height * ctx.zoom * ctx.magnification * ctx.screen_constant


        // calculate pixels
        d.measures.usable_w = Math.round(d.width/d.frame.base_width * ctx.snail_width * ctx.magnification)
        if (d.measures.usable_w > d.width) {
          d.measures.usable_w = d.width
        }

        d.measures.usable_h = Math.round(d.height/d.frame.base_height * ctx.snail_height * ctx.magnification)
        if (d.measures.usable_h > d.height) {
          d.measures.usable_h = d.height
        }

        //calculate print size
        d.measures.print_w = ((d.width/d.frame.base_width * ctx.snail_width * ctx.magnification)/300).toFixed(2)

        d.measures.print_h = ((d.height/d.frame.base_height * ctx.snail_height * ctx.magnification)/300).toFixed(2)

        // calculate percent of total image
        d.measures.percent_w = Math.round((d.measures.usable_w/d.width) * 100)
        d.measures.percent_h = Math.round((d.measures.usable_h/d.height) * 100)

        d.measures.percent_img = ((d.measures.usable_w * d.measures.usable_h)/(d.width * d.height) * 100).toFixed(2)
      })

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
        this.diameter = false
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

.macro {
.frames {
  display: flex;
  align-items: center;
}
.frame {
  border: 1px solid #efefef;
  // margin-bottom: 5rem;
  margin: 2rem;
  position: relative;
  transform: scale(1.35);
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
  flex:1;
}
.camera {
  display:flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 1rem;
  h2 {
    margin-bottom:0;
  }
}
.usable {
  font-weight: bold;
}
}
</style>
