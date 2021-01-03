<template>
  <div class="key">

    <h3>Find Family</h3>
    <ul v-for="(c,i) in fam_choices" :key="i" :style="{'borderLeftWidth': + (i+1)*2 + 'px'}" class="family-key" >
        <li  v-if="c.c1" @click="makeFamChoice(c.c1,i)" :class="{'selected':c.c1.selected}">{{c.c1.n}} {{c.c1.l}}
          <b style="display:block" v="c.c1.g">{{c.c1.g}}</b>
        </li>
        <li  v-if="c.c2" @click="makeFamChoice(c.c2,i)" :class="{'selected':c.c2.selected}">{{c.c2.n}} {{c.c2.l}}
          <b style="display:block"  v="c.c2.g">{{c.c2.g}}</b>
        </li>
        <li v-if="c.img"><img :src="'key/'+c.img" /></li>
    </ul>
    <h3 v-if="family_found">{{family_found}}</h3>

    <div v-if="family_found === 'Pupillidae'">
      <ul v-for="(c,i) in pup_choices" :key="i" :style="{'borderLeftWidth': + (i+1)*2 + 'px'}"  class="family-key">
          <li  v-if="c.c1" @click="makePupChoice(c.c1,i)" :class="{'selected':c.c1.selected}">{{c.c1.n}} {{c.c1.l}}
            <b style="display:block" v="c.c1.g">{{c.c1.g}}</b>
          </li>
          <li  v-if="c.c2" @click="makePupChoice(c.c2,i)" :class="{'selected':c.c2.selected}">{{c.c2.n}} {{c.c2.l}}
            <b style="display:block"  v="c.c2.g">{{c.c2.g}}</b>
          </li>
      </ul>
      <h3 v-if="pup_found">{{pup_found}}</h3>
    </div>

    <div v-if="(family_found && family_found !=='Pupillidae') || (family_found ==='Pupillidae' && pup_found)">
      <ul v-for="(c,i) in s_choices" :key="i" :style="{'borderLeftWidth': + (i+1)*2 + 'px'}"  class="family-key">
          <li  v-if="c.c1" @click="makeSpeciesChoice(c.c1,i)" :class="{'selected':c.c1.selected}">{{c.c1.n}} {{c.c1.l}}
            <b style="display:block" v="c.c1.g">{{c.c1.g}}</b>
          </li>
          <li  v-if="c.c2" @click="makeSpeciesChoice(c.c2,i)" :class="{'selected':c.c2.selected}">{{c.c2.n}} {{c.c2.l}}
            <b style="display:block"  v="c.c2.g">{{c.c2.g}}</b>
          </li>
          <li v-if="c.img"><img :src="'img/'+c.img" /></li>
          <li v-if="c.img2"><img :src="'img/'+c.img2" /></li>
      </ul>
      <h3 v-if="species_found"><router-link :to="{name: 'Species', params: { url:species_found.replace(/ /g,'-').toLowerCase()} }">{{species_found}}</router-link></h3>
    </div>

  </div>
</template>


<script>
import tk from '../taxonomickey.js'
import burch from '../burch.js'
export default{
  name: 'Key',
  data: function(){
    return {
      fam_choices: [],
      family: tk.family,
      pupillidae: tk.pupillidae,
      pup_choices: [],
      family_found: null,
      pup_found: null,
      s_key: null,
      s_choices:[],
      species_found: null
    }
  },
  methods: {
    makeFamChoice: function(o,i,){
      this.fam_choices.splice(i+1)
      this.fam_choices[i].c1.selected = false
      this.fam_choices[i].c2.selected = false
      o.selected = true
      if (o.next) {
        this.fam_choices.push(this.family[o.next])
        this.family_found = null
      } else {
        this.family_found = o.f
        if (o.f !== 'Pupillidae'){
            this.s_key = burch[o.f.toLowerCase()]
            this.s_choices.push(this.s_key.t1)
        }
      }
    },
    makePupChoice: function(o,i,){
      this.pup_choices.splice(i+1)
      this.pup_choices[i].c1.selected = false
      this.pup_choices[i].c2.selected = false
      o.selected = true
      if (o.next) {
        this.pup_choices.push(this.pupillidae[o.next])
        this.pup_found = null
      } else {
        this.pup_found = o.g
        this.s_key = burch[o.g.toLowerCase()]
        this.s_choices.push(this.s_key.t1)
      }
    },
    makeSpeciesChoice: function(o,i,){
      this.s_choices.splice(i+1)
      this.s_choices[i].c1.selected = false
      this.s_choices[i].c2.selected = false
      o.selected = true
      if (o.next) {
        this.s_choices.push(this.s_key[o.next])
        this.species_found = null
      } else {
        this.species_found = o.s
      }
    },
  },
  created(){
    this.fam_choices.push(this.family.t1)
    this.pup_choices.push(this.pupillidae.t1)
  }
}
</script>


<style lang="scss">

h3{
  text-align:left;
}

.family-key {
    max-width: 600px;
    margin:0 auto 4em;

    img {
      width: 100%;
    }
}

.family-key * {
  text-align: left;
}
ul {
  text-align: left;
  list-style-type: none;
  border-left-style: solid;
  border-left-color: #000;
  margin:0;
  padding: 16px;
  border-top:1px solid #efefef;
}

li {
  margin-bottom: 1rem;
  &:hover {
    cursor:pointer;
  }

  b {
    color: green;
  }
  img {
    max-width:100%;
  }
}

li.selected {
  font-weight: bold;
}

.cap {
  text-transform: capitalize;
}
</style>
