<template>
<div class="family">

  <h1>{{total_species}} Species</h1>

    <div v-for="f in families" :key="f">
        <h1>{{f}} ({{species[f].length}})</h1>
        <ul>
            <li v-for="s in species[f]" :key="s.species"><router-link :to="{name: 'Species', params: { url:s.species.replace(/ /g,'-').toLowerCase()} }">{{s.species}}</router-link></li>
        </ul>
    </div>

</div>
</template>

<script>
import burch from '../burch.js'
export default {
  name: 'SpeciesInKey',
  data: function(){
    return {
      obj: burch,
      speciesDesc: [],
      speciesSelected: null
    }
  },
  computed: {
    families(){
      let families = []
      for (let d in this.obj) {
        if (d !== 'pupillidae') {
          families.push(d)
        }    
      }
      families.sort()
      return families
    },
    species(){

      let species = {}

      // let f = []

      for (let d in this.obj) {
          species[d] = []
        for (let e in this.obj[d]) {
          for (let j in this.obj[d][e]) {
            if (this.obj[d][e][j].s) {
              let obj = {}
              obj.species = this.obj[d][e][j].s
              obj.family = d
              species[d].push(obj)
            }
          }
        }
      }

      for (let f in species) {
        species[f] = species[f].filter(this.onlyUnique).sort(function(a,b){
          return (a.species > b.species) ? 1 : -1
        })
      }

      for (let f in species) {
        let current = '';
        species[f] = species[f].filter(function(d){
          if (d.species !== current) {
            current = d.species
            return true
          }
        })

      }

      return species
    },
    total_species(){
      let count = 0;
      for (let f in this.species) {
        count = count + this.species[f].length
      }
      return count
    }
  },
  methods: {
    onlyUnique: function(value, index, self) {
      return self.indexOf(value) === index;
    },
    getSpecies: function(f){
      let ctx = this
      ctx.speciesDesc.splice(0,ctx.speciesDesc.length)
      let start = []

        for (let e in ctx.obj[f.family]) {
          for (let g in ctx.obj[f.family][e]) {
            if (ctx.obj[f.family][e][g].s === f.species ) {
              let startObj = {}
              startObj.t = e
              startObj.c = g
              start.push(startObj)
            }
          }
        }

        console.log(start)


      start.forEach(function(s,i){
        let prev = ctx.obj[f.family][s.t].prev
        let current = s.t
        // let choice = s.c
        ctx.speciesDesc[i] = []

        // console.log('prev ' + prev)
        // console.log('current ' + current)

        ctx.speciesDesc[i].push(ctx.obj[f.family][s.t][s.c])
        // let counter = 10;
        while (prev) {

          let t = prev

          for (let o in ctx.obj[f.family][t]) {
            if (ctx.obj[f.family][t][o].next === current) {
              ctx.speciesDesc[i].push(ctx.obj[f.family][t][o])
            }
            prev = ctx.obj[f.family][t].prev
          } // for

          current = t

          // counter = counter-1

        } // while



        // while (prev) {
        //   let prevFound = false
        //
        //   // console.log('prev ' + prev)
        //
        //   for (let o in ctx.obj[f.family][prev]) {
        //
        //     if (ctx.obj[f.family][prev][o].next){
        //       // console.log(ctx.obj[f.family][prev][o].next)
        //     if (ctx.obj[f.family][prev][o].next === current) {
        //
        //       ctx.speciesDesc[i].push(ctx.obj[f.family][prev][o])
        //       current = prev
        //       prev = ctx.obj[f.family][prev].prev
        //       prevFound = true
        //     }
        //     }
        //
        //   } // for
        //   // console.log(prevFound)
        //   if (!prevFound){
        //     break
        //     prev = false
        //     current = false
        //   }
        //
        //
        //
        // } // while

        ctx.speciesDesc[i].reverse()
      }) //// s foreach


      ctx.speciesSelected = f

    } // get family
  } // methods
}
</script>

<style lang="scss">
.family *{
  text-align: left;
}
.family{
  max-width: 600px;
  margin:0 auto;

  ul {
    margin-bottom:4em;
    border-bottom: 1px solid #efefef;
  }
  li {
    margin-bottom: 1rem;
    &:hover {
      cursor:pointer;
    }

    b {
      color: green;
      display: block;
    }
  }
}
</style>
