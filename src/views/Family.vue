<template>
<div class="family">

  <template v-if="familySelected">
    <a @click="familySelected = false">back</a>
    <h1>{{familySelected}}</h1>
    <ul v-for="(d,i) in familyDesc" :key="i + 'group'">
      <li v-for="(f,j) in d" :key="i + '-' + j">{{f.n}} {{f.l}}
      <b v-if="f.g">{{f.g}}</b>
      <b v-if="f.f">Family {{f.f}}</b>
    </li>
    </ul>

  </template>

    <ul v-else>
      <li v-for="f in families" :key="f" @click="getFamily(f)">{{f}}</li>
    </ul>

</div>
</template>

<script>
import tk from '../taxonomickey.js'
export default {
  name: 'Family',
  data: function(){
    return {
      obj: tk.taxkey,
      familySelected: false,
      familyDesc: [],
      // familyBase: [],
      // familyParts: [],
      // familyInParts: false
    }
  },
  computed: {
    families(){
      let f = []

      for (let d in this.obj) {
        for (let e in this.obj[d]) {
          if (this.obj[d][e].f) {
            f.push(this.obj[d][e].f)
          }
        }
      }
      return f.filter(this.onlyUnique).sort()
    }
  },
  methods: {
    onlyUnique: function(value, index, self) {
      return self.indexOf(value) === index;
    },
    getFamily: function(f){
      let ctx = this
      ctx.familyDesc.splice(0,ctx.familyDesc.length)
      let start = []

      for (let d in ctx.obj) {
        for (let e in ctx.obj[d]) {
          if (ctx.obj[d][e].f === f ) {
            let startObj = {}
            startObj.t = d
            startObj.c = e
            start.push(startObj)
          }
        }
      }

      start.forEach(function(s,i){
        let prev = ctx.obj[s.t].prev
        let current = s.t
        ctx.familyDesc[i] = []

        ctx.familyDesc[i].push(ctx.obj[s.t][s.c])

        while (prev) {
          let prevFound = false
          for (let o in ctx.obj[prev]) {
            if (ctx.obj[prev][o].next === current) {
              ctx.familyDesc[i].push(ctx.obj[prev][o])
              current = prev
              prev = ctx.obj[prev].prev
              prevFound = true
            }
          }
          if (!prevFound){
            prev = null
            current = null
          }
        } // while
        ctx.familyDesc[i].reverse()
      }) //// s foreach


      // if (ctx.familyDesc.length > 1) {
      //   for (let i = 0; i < ctx.familyDesc.length; i++){
      //     ctx.familyParts[i] = []
      //   }
      //
      //   for (let i = 0; i < (ctx.familyDesc.length - 1); i++){
      //     let killSwitch = null
      //     for (let j = 0; j < ctx.familyDesc[i].length; j++){
      //
      //       for (let k = 0; k < ctx.familyDesc[i+1].length; k++){
      //
      //       if (ctx.familyDesc[i][j].n === ctx.familyDesc[i+1][k].n) {
      //         ctx.familyBase.push(ctx.familyDesc[i][j])
      //         console.log(ctx.familyDesc[i][j].n + ' ' + ctx.familyDesc[i+1][k].n)
      //         killSwitch = k+1
      //       } else {
      //         ctx.familyParts[i].push(ctx.familyDesc[i][j])
      //       }
      //     }
      //     }
      //     if (killSwitch) {
      //       console.log(killSwitch)
      //       ctx.familyDesc[i+1].splice(0,killSwitch)
      //     }
      //   }
      //   ctx.familyInParts = true
      // } else {
      //   ctx.familyInParts = false
      // }


      ctx.familySelected = f

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
