<template>
  <div class="family-key">

    <template  v-if="family">
        <ul v-for="(c,i) in choices" :key="i" :style="{'borderLeftWidth': + (i+1)*2 + 'px'}" >
            <li v-if="c.img">
              <img :src="'img/' + c.img" /><img v-if="c.img2" :src="'img/' + c.img2" />
            </li>
            <li  v-if="c.c1" @click="makeChoice(c.c1,i)" :class="{'selected':c.c1.selected}">{{c.c1.n}} {{c.c1.l}}
              <b style="display:block" v="c.c1.g">{{c.c1.g}}</b>
            </li>
            <li  v-if="c.c2" @click="makeChoice(c.c2,i)" :class="{'selected':c.c2.selected}">{{c.c2.n}} {{c.c2.l}}
              <b style="display:block"  v="c.c2.g">{{c.c2.g}}</b>
            </li>
        </ul>

        <h1 v-if="species" @click="summarizeFamily()">{{species}}</h1>

        <template v-if="family === 'pupillidae' || family === 'gastrocopta' || family === 'vertigo' || family === 'columella' || family === 'pupilla' || family === 'pupoides'">

          <a href="img/pupa-nekola/pupa-teeth.jpg" target="_blank"><img src="img/pupa-nekola/pupa-teeth.jpg" /></a>
          <a href="img/pupa-nekola/shell-features.jpg" target="_blank"><img src="img/pupa-nekola/shell-features.jpg" /></a>
          <a href="img/pupa-nekola/fig1.jpg" target="_blank"><img src="img/pupa-nekola/fig1.jpg" /></a>
          <a href="img/pupa-nekola/fig2.jpg" target="_blank"><img src="img/pupa-nekola/fig2.jpg" /></a>
          <a href="img/pupa-nekola/fig3.jpg" target="_blank"><img src="img/pupa-nekola/fig3.jpg" /></a>
          <a href="img/pupa-nekola/fig4.jpg" target="_blank"><img src="img/pupa-nekola/fig4.jpg" /></a>
          <a href="img/pupa-nekola/fig5.jpg" target="_blank"><img src="img/pupa-nekola/fig5.jpg" /></a>
          <a href="img/pupa-nekola/fig6.jpg" target="_blank"><img src="img/pupa-nekola/fig6.jpg" /></a>

        </template>


    </template>

    <ul v-else>
      <li class="cap" v-for="f in families" :key="f" @click="setFamily(f)">{{f}}
        <span v-if="f === 'carychiidae'">(Carychium) </span>
        <span v-if="f === 'valloniidae'">(Planogyra, Vallonia) </span>
        <span v-if="f === 'endodontidae'">[comprised of Discidae (Anguispira, Discus), Helicodiscidae (Helicodiscus), Punctidae (Punctum)] </span>
        <span v-if="f === 'pupillidae'">(Columella, Gastrocopta, Pupilla, Pupoides, Vertigo ) </span>
        <span v-if="f === 'zonitidae'">[includes Vitrinidae] (Gastrodonta, Glyphyalinia, Guppya, Hawaiia, Mesomphix, Nesovitrea, Paravitrea, Pilsbryna, Striatura, Ventridens, Vitrinizonites, Zonitoides) </span>
        <span v-if="f === 'pupillidae' || f === 'gastrocopta' || f === 'vertigo' || f === 'columella' || f === 'pupilla' || f === 'pupoides'">(Nekola)</span>
        <span v-else>(Burch)</span>
      </li>
    </ul>


  </div>
</template>

<script>
import burch from '../burch.js'
export default {
  name: 'SpeciesKey',
  data: function(){
    return {
      taxkey: burch,
      choices: [],
      species: null,
      family: null,
      familyKey: null
    }
  },
  computed: {
    families(){
        let arr = []
        for (let b in this.taxkey) {
          arr.push(b)
        }
        return arr
    }
  },
  methods: {
    setFamily(f){
      this.family = f
      this.familyKey = this.taxkey[f]
      this.choices.push(this.familyKey.t1)
    },
    makeChoice: function(o,i,){
      this.choices.splice(i+1)
      this.choices[i].c1.selected = false
      this.choices[i].c2.selected = false
      o.selected = true
      if (o.next) {
        this.choices.push(this.familyKey[o.next])
        this.species = null
      } else if (o.s) {
        this.species = o.s
      }
    },
    summarizeFamily(){
      this.choices.forEach(function(d){
        if (d.c1.selected === false) {d.c1 = null}
        else if (d.c2.selected === false) {d.c2 = null}
      })
    }
  }
}
</script>

<style lang="scss">

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
}

li.selected {
  font-weight: bold;
}

.cap {
  text-transform: capitalize;
}
</style>
