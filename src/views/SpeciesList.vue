<template>
  <div class="species-list flex" ref="top">

    <div class="snail-list">
      <label><input type="checkbox" v-model="in_key" @change="filterKey()" ref="only_key" />Show only in key</label>
      <label><input type="checkbox" v-model="only_iowa" @change="filterIowa()" />Show only Iowa and Eastern Bordering States (IL, MO, MN, WI)</label>

      <h1>Total Species: {{total_snails}}</h1>
      <div v-for="s in filtered_snails" :key="s.f" :ref="s.f">
        <h3 :id="s.f">{{s.f}} ({{s.s.length}})</h3>
        <ul class="list">
          <li v-for="snail in s.s" :key="snail.species"><router-link :to="{name: 'Species', params: { url:snail.species.replace(/ /g,'-').toLowerCase()} }" target="_blank">{{snail.species}} - {{snail.common}}</router-link> <small>{{snail.author}}</small> <span v-if="snail.ia" class="iowa">Iowa</span><span v-if="snail.bordering" class="iowa bordering">Bordering States</span><span v-if="snail.native==='n'" class="non-native">non-native</span><span v-if="snail.in_key===true" class="non-native in-key">in key</span><span v-if="snail.notes" class="non-native notes">notes</span><template><span v-if="snail.status.includes('G1')" class="status g1">Critically Imperiled</span><span v-else-if="snail.status.includes('G2')" class="status g2">Imperiled</span><span v-else-if="snail.status.includes('G3')" class="status g3">Vulnerable</span><span class="image-count">photos: {{snail.images.length}}</span></template>
          </li>
        </ul>
        <a @click="scrollTo('top')">back to top</a>
      </div>
    </div>

    <div class="sticky">
      <div class="fam-nav">
        <ul class="list">
          <li v-for="s in filtered_snails" :key="s.f + 'jump'"><a @click="scrollTo(s.f)">{{s.f}} ({{s.s.length}})</a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import master from '../snails.js'
export default {
  name: 'SpeciesList',
  data: function(){
    return {
      in_key: false,
      only_iowa: false,
      filtered_snails: null,
      snail_master: null,
      total_snails: 0
    }
  },
  computed:{
    snails(){
      let s = []
      for (let d in master){
        s.push(master[d])
      }
      return s
    }
  },
  watch: {
    'snails':'setFilteredSnails'
  },
  methods: {
    setFilteredSnails(){

      let f = []
      for (let d in master){
        if (f.indexOf(master[d].family)<0 && master[d].family.trim() !== ''){
          f.push(master[d].family)
        }
      }
      let fams = []
      let positions = {}

      f.forEach((d,i)=>{
        let obj = {}
        obj.f = d
        obj.s = []
        fams.push(obj)
        positions[d] = i
      })

      for (let d in master){
        fams[positions[master[d].family]].s.push(master[d])
      }

      // console.log(fams)

      this.snail_master = fams
      this.filtered_snails = fams
      this.countSnails()


    },
    filterKey: function(){
      // let ctx = this
      let holder = []

      if (this.in_key) {

        this.snail_master.forEach(function(d){
          let fam = {}
          fam.f = d.f
          fam.s = []
          d.s.forEach(function(s){
            if (s.in_key === true) {
              fam.s.push(s)
            }
          })
          if (fam.s.length > 0) {
            holder.push(fam)
          }
        })
        this.filtered_snails = holder
      } else {
        this.filtered_snails = this.snail_master
      }
      this.countSnails()
    },
    filterIowa: function(){
      // let ctx = this
      let holder = []

      this.$refs.only_key.disabled = true
      this.in_key = false

      if (this.only_iowa) {

        this.snail_master.forEach(function(d){
          let fam = {}
          fam.f = d.f
          fam.s = []
          d.s.forEach(function(s){
            if (s.ia === true || s.bordering === true) {
              fam.s.push(s)
            }
          })
          if (fam.s.length > 0) {
            holder.push(fam)
          }
        })
        this.filtered_snails = holder
      } else {
        this.filtered_snails = this.snail_master
        this.$refs.only_key.disabled = false
      }
      this.countSnails()
    },
    countSnails: function(){
      let ctx = this
      ctx.total_snails = 0
      ctx.filtered_snails.forEach(d=>{
        ctx.total_snails = ctx.total_snails + d.s.length
      })
    },
    scrollTo: function(el){
      if (el === 'top') {
        this.$refs.top.scrollIntoView();
      } else {
        this.$refs[el][0].scrollIntoView();
      }
    }
  },
  mounted(){
    this.setFilteredSnails()
  }
}
</script>

<style lang="scss">

label {
  margin-left:1rem;
}
.list, h3 {
  text-align:left;
}
.list li {
  margin-bottom:10px;

  span {
    margin-left:6px;
  }
}
.iowa {
  font-weight:bold;
  font-size:10px;
  background-color:forestgreen;
  color:#fff;
  padding:2px 4px;
  border-radius:4px;
  vertical-align:baseline;
  &.bordering {
    background-color: lightgreen;
  }
}

.non-native{
  font-size:10px;
  background-color:lemonchiffon;
  color:#333;
  padding:2px 4px;
  border-radius:4px;
  vertical-align:baseline;
  &.in-key {
    background-color: #efefef;
  }
  &.notes {
    background-color: coral;
    color: #fff;
  }
}
.sticky {
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  top: 0;
  align-self: flex-start; /* <-- this is the fix */
}
.fam-nav {
  max-height: 100vh;
  overflow: auto;
  border-left: 1px solid #efefef;

  a {
    cursor: pointer;
    &:hover {
      color: forestgreen;
    }
  }
}
.snail-list {
  flex-grow: 1;
}
.status {
  font-weight:bold;
  font-size:10px;
  color:#fff;
  padding:2px 4px;
  border-radius:4px;
  vertical-align:baseline;
  &.g1 {
    background-color: #990000;
  }
  &.g2 {
    background-color: #b30000;
  }
  &.g3 {
    background-color: #cc0000;
  }
}
.image-count {
  font-size:10px;
  color:#fff;
  padding:2px 4px;
  border-radius:4px;
  vertical-align:baseline;
  background-color: #000;
}
</style>
