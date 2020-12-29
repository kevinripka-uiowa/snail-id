<template>
  <div id="snail-form">

    <h1>Identify Your Snail</h1>
    <a href="https://www.carnegiemnh.org/science/mollusks/terminology.html">Glossary of terms</a>
    <div class="formpart">
      <h2>Shell Shape</h2>
      <div class="flex">
        <div v-for="s in shapes" :key="s.name" class="form-input">
          <label>
            <img :src="'img/features/shape-' + s.name.toLowerCase().replace(/ /g,'-') + '.svg'" />
            <h3>{{s.name}}</h3>
            <p>{{s.formDesc}}</p>
            <input type="radio" name="shape" :value="s.name" v-model="id.shape" @change="emitForm" />
          </label>
        </div>
        <a class="clear" @click="clear('shape')">clear</a>
      </div>

      <div v-if="id.shape == 'Pupa'" id="pupilliform">
        <h2>Pupilliform Types</h2>
        <div class="flex">
        <div v-for="s in features[8].values" :key="s" class="form-input">
          <label>
            <img :src="'/img/features/pupilliform-' + s.toLowerCase().replace(/ /g,'-') + '.svg'" />
            <h3>{{s}}</h3>
            <!-- <p>{{s.desc}}</p> -->
            <input type="radio" name="pupa" :value="s" v-model="id.pupa" @change="emitForm" />
          </label>
        </div>
      </div>
      </div>

    </div>

    <div class="formpart" id="umbilicus">
      <h2>Umbilicus</h2>
      <div class="flex">
        <div v-for="s in umbilicus" :key="s.name" class="form-input">
          <label>
            <img :src="'img/features/umbilicus-' + s.header.replace(/ /g,'-') + '.svg'" />
            <h3>{{s.header}}</h3>
            <p>{{s.formDesc}}</p>
            <input type="radio" name="umbilicus" :value="s.header" v-model="id.umbilicus" @change="emitForm" />
          </label>
        </div>
      </div>
      <a class="clear" @click="clear('umbilicus')">clear</a>
    </div>

    <div class="formpart p-bottom">

      <div class="flex">
      <label v-for="s in sizes" :key="s.name" class="form-input">
        <h3>{{s.name}}</h3>
        <p>{{s.low}}mm&ndash;{{s.high}}mm</p>
        <input type="checkbox" v-model="id[s.val]" @change="emitForm" />
      </label>
    </div>

      <h2>Width</h2>
      <input type="text" v-model="id.width" @change="emitForm" />
      <input type="range" v-model="id.width" name="width" min="1" max="35" step="0.1" @change="emitForm">
      <h2>Height</h2>
      <input type="text" v-model="id.height" @change="emitForm" />
      <input type="range" v-model="id.height" name="height" min="1" max="30" step="0.1" @change="emitForm">
    </div>

    <div class="formpart p-bottom">
      <h2>Whorls</h2>
      <input type="text" v-model="id.whorls" @change="emitForm" />
      <input type="range" v-model="id.whorls" name="width" min="3" max="8" step="0.25" @change="emitForm">
      <h3>Counting Whorls</h3>

      <figure>
      <img style="min-width: 400px" src="/img/features/counting-whorls-suture.svg" />
      <figcaption><b>Suture Method</b> - Count by tracing the sutures in 360 degrees. Used by Pilsbry. In this diagram, the snail has about 6.5 whorls.</figcaption>
      </figure>


      <figure>
        <img style="min-width: 400px" src="/img/features/counting-whorls-body.svg" />
      <figcaption><b>Middle of Whorl Method</b> - Count by tracing the whorls in the center to 360 degrees. You don't count some of the embryonic whorl. Per Burch, Kearney &amp; Cameron (1979) and Gerber (1996). In the diagram, the same snail has about 6 whorls. </figcaption>
      </figure>

    </div>

    <div class="formpart" id="markings">
      <h2>Shell Markings</h2>
      <div class="flex">
        <div v-for="s in markings" :key="s.header" class="form-input" @change="emitForm">
          <label>
            <img :src="'/img/features/' + s.img" />
            <h3>{{s.name}}</h3>
            <p>{{s.desc}}</p>
            <input type="checkbox" name="markings" :value="s.header" v-model="id[s.header]" @change="emitForm" />
          </label>
        </div>
      </div>
    </div>

    <div class="formpart p-bottom">
      <h2>Lip</h2>
      <label><input type="radio" name="lip" value="y" v-model="id.lip_reflected" @change="emitForm" /> Reflected</label>
      <label><input type="radio" name="lip" value="n" v-model="id.lip_reflected" @change="emitForm" /> Not Reflected</label>
    </div>

    <div class="formpart p-bottom">
      <h2>Teeth</h2>
      <label><input type="radio" name="teeth" value="y" v-model="id.teeth" @change="emitForm" /> Yes</label>
      <label><input type="radio" name="teeth" value="n" v-model="id.teeth" @change="emitForm" /> No</label>

      <div v-if="id.teeth == 'y'" id="teeth_types">
        <div class="flex" id="teeth_types">
        <label v-for="s in teeth_types" :key="s.header" class="form-input">
          <h3>{{s.header}}</h3>
          <p>{{s.desc}}</p>
          <input type="checkbox" :value="s.header" v-model="id[s.header]" @change="emitForm" />
        </label>
      </div>
      </div>

    </div>

    <div class="formpart" id="aperture">
      <h2>Aperture Shape</h2>
      <div class="flex">
        <div v-for="s in aperture" :key="s.header" class="form-input">
          <label>
            <img :src="'/img/features/' + s.img" />
            <h3>{{s.header}}</h3>
            <p>{{s.desc}}</p>
            <input type="radio" name="aperture" :value="s.header" v-model="id.aperture" @change="emitForm" />
          </label>
        </div>
      </div>
    </div>

    <div class="formpart" id="shoulder">
      <h2>Periphery</h2>
      <div class="flex">
        <div v-for="s in periphery" :key="s.header" class="form-input">
          <label>
            <img :src="'/img/features/' + s.img" />
            <h3>{{s.header}}</h3>
            <p>{{s.desc}}</p>
            <input type="radio" name="shoulder" :value="s.header" v-model="id.shoulder" @change="emitForm" />
          </label>
        </div>
      </div>
    </div>

    <div class="formpart p-bottom">
      <h2>Pedal (Tripartate)</h2>
      <label><input type="radio" name="pedal" value="y" v-model="id.pedal" @change="emitForm" /> Yes</label>
      <label><input type="radio" name="pedal" value="n" v-model="id.pedal" @change="emitForm" /> No</label>
    </div>

    <div class="formpart p-bottom">
      <h2>Operculum</h2>
      <label><input type="radio" name="operculum" value="y" v-model="id.operculum" @change="emitForm" /> Yes</label>
      <label><input type="radio" name="operculum" value="n" v-model="id.operculum" @change="emitForm" /> No</label>
    </div>


  </div>
</template>


<script>
import dk from '@/datakey.js'
export default {
  name: 'SnailForm',
  data: function(){
    return {
      features: dk.data,
      shapes: dk.shell_shapes,
      sizes: dk.sizes,
      id: {
        shape: null,
        pupa: null,
        umbilicus: null,
        width: null,
        height: null,
        whorls: null,
        axial_striae:null,
        axial_ridges:null,
        wrinkles: null,
        spiral: null,
        lirate: null,
        ribs: null,
        papillae: null,
        puncta: null,
        hairs: null,
        blotches: null,
        bands: null,
        teeth: null,
        palatal: null,
        columnellar: null,
        basal: null,
        parietal: null,
        lip_reflected: null,
        aperture: null,
        shoulder: null,
        operculum: null,
        pedal: null,
        micro: null,
        minute: null,
        small: null,
        medium: null,
        large: null
      }
    }
  },
  methods: {
    emitForm: function(){
      this.$emit('formChange',this.id)
    },
    clear: function(v){
      this.id[v] = null
      this.$emit('formChange',this.id)
    }
  },
  computed: {
    umbilicus(){
      let arr = []
      this.features.forEach(function(d){
        if (d.group === 'umbilicus') {
          arr.push(d)
        }
      })
      return arr
    },
    markings(){
      let arr = []
      this.features.forEach(function(d){
        if (d.group === 'markings') {
          arr.push(d)
        }
      })
      return arr
    },
    teeth_types(){
      let arr = []
      this.features.forEach(function(d){
        if (d.group === 'teeth_types') {
          arr.push(d)
        }
      })
      return arr
    },
    aperture(){
      let arr = []
      this.features.forEach(function(d){
        if (d.group === 'aperture') {
          arr.push(d)
        }
      })
      return arr
    },
    periphery(){
      let arr = []
      this.features.forEach(function(d){
        if (d.group === 'periphery') {
          arr.push(d)
        }
      })
      return arr
    }
  }
}

</script>

<style lang="scss">
  .flex {
    display:flex;
    flex-wrap: wrap;
  }
  .formpart {
    border: 1px solid #ddd;
    background-color: #efefef;
    margin-bottom: 4rem;
    position: relative;
    .clear {
      position: absolute;
      top:4px;
      right: 4px;
    }
    img {
      width: 75px;
    }
  }
  .form-input {
    margin: 20px;
    flex: 1 1 0;
    border: 1px solid #ddd;
    label {
      padding: 16px;
      display: block;
      text-transform: capitalize;
      // height: calc(100% - 32px);
      cursor: pointer;
      &:hover {
        background-color: #ddd;
      }

    }
    input[type="radio"]:checked+label {
      background-color: #ddd;
    }
    h3 {
      text-transform: capitalize;
    }
  }
  #teeth_types, #umbilicus, #pupilliform, #aperture, #teeth_types, #shoulder, #markings {
     .form-input{
      flex: initial;
      width: calc(50% - 40px);
      height: 100%;
    }
  }
  .p-bottom {
    padding-bottom: 16px;
  }
</style>
