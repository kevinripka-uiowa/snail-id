<template>
  <div class="family-key">

    <template>
        <ul v-for="(c,i) in choices" :key="i" :style="{'borderLeftWidth': + (i+1)*2 + 'px'}" >
            <li  v-if="c.c1" @click="makeChoice(c.c1,i)" :class="{'selected':c.c1.selected}">{{c.c1.n}} {{c.c1.l}}
              <b style="display:block" v="c.c1.g">{{c.c1.g}}</b>
            </li>
            <li  v-if="c.c2" @click="makeChoice(c.c2,i)" :class="{'selected':c.c2.selected}">{{c.c2.n}} {{c.c2.l}}
              <b style="display:block"  v="c.c2.g">{{c.c2.g}}</b>
            </li>
        </ul>
        <h1 v-if="family" @click="summarizeFamily()">{{family}}</h1>
    </template>

  </div>
</template>

<script>
import fk from '../taxonomickey.js'
export default {
  name: 'FamilyKey',
  data: function(){
    return {
      taxkey: fk.taxkey,
      choices: [],
      family: null
    }
  },
  methods: {
    makeChoice: function(o,i,){
      this.choices.splice(i+1)
      this.choices[i].c1.selected = false
      this.choices[i].c2.selected = false
      o.selected = true
      if (o.next) {
        this.choices.push(this.taxkey[o.next])
        this.family = null
      } else if (o.f) {
        this.family = o.f
      }
    },
    summarizeFamily(){
      this.choices.forEach(function(d){
        console.log(d)
        if (d.c1.selected === false) {d.c1 = null}
        else if (d.c2.selected === false) {d.c2 = null}
      })
    }
  },
  mounted(){
    this.choices.push(this.taxkey.t1)
  }
}
</script>

<style lang="scss">

.family-key {
    max-width: 600px;
    margin:0 auto 4em;
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
}

li.selected {
  font-weight: bold;
}
</style>
