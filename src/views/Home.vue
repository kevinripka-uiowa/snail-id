<template>
  <div class="home">
    <a @click="resetForm">Reset Form</a>
      <div class="flex" id="home-flex">


        <div>
          <keep-alive>
          <SnailForm @formChange="filterSnails" />
          </keep-alive>
        </div>
        <div>
          <keep-alive>
          <SnailList :snailsFiltered="snailsFiltered" />
          </keep-alive>
        </div>

      </div>


  </div>
</template>

<script>
import SnailForm from '@/components/SnailForm.vue'
import SnailList from '@/components/SnailList.vue'
import axios from 'axios'
import store from '@/datakey.js'
export default {
  name: 'Home',
  components: {
    SnailForm,
    SnailList
  },
  data: function(){
    return {
      snails: [],
      snailsFiltered: [],
      formQuery: null,
      sizes: store.sizes
    }
  },
  methods: {
    filterSnails(e){
      let ctx = this
      ctx.formQuery = e

      let f = []
      ctx.snails.forEach(d => {
        f.push(d)
      })

      let query = {};

      for (let q in ctx.formQuery) {
        if (ctx.formQuery[q] && !Array.isArray(ctx.formQuery[q])) {
          query[q] = ctx.formQuery[q]
        }
      }

      // console.log(query)


      ctx.snailsFiltered = f.filter(d => {
          let filter_number = Object.keys(query).length
          let filter_hits = 0

          for (let q in query) {

            if(q === 'shape') {
              if (d.shape === query.shape){filter_hits = filter_hits + 1}
            } else if

            // these have their own columns
            (q === 'umbilicus' || q === 'aperture' || q==="shoulder") {
              if (d[query[q].toLowerCase().replace(/ /g,'_')] === 'y'){filter_hits = filter_hits + 1}
            } else if

            // these are values
            (q === 'width' || q === 'height' || q === 'whorls') {
              if (d[q]) {
                if ( Number(query[q]) >= d.width[0] && Number(query[q]) <= d.width[1]){filter_hits = filter_hits + 1}
              }
            } else if

            (q === 'axial_striae' || q === 'axial_ridges' || q === 'wrinkles' || q === 'spiral_striae' || q === 'lirate' ||q === 'lamellar_ribs' || q === 'malleations' || q === 'ribs' || q==='papillae' || q==='puncta' || q==='hairs' || q==='blotches' || q==='bands') {
                let v = (query[q] === true) ? 'y' : 'n';
                if (d[q] === v || d[q] === 's'){filter_hits = filter_hits + 1}
            } else if

            // these have 's' for sometimes
            (q === 'teeth') {
              if (d[q] === query[q] || d[q] === 's'){filter_hits = filter_hits + 1}
            } else if

            // true false to y n
            (q === 'micro' || q==='minute' || q==='small' || q==='medium' || q==='large')  {
              let v = (query[q]==true) ?  'y' : 'n';
              if (d[q] === v){filter_hits = filter_hits + 1}
            } else

            // these ones are to match the id key and the y or n
            {
              if (query[q] == d[q]){filter_hits = filter_hits + 1}
            }



          }
          return filter_number === filter_hits
      })





    },
    resetForm(){
      this.formQuery = null
      this.snailsFiltered = []
      this.snails.forEach(d => {
        this.snailsFiltered.push(d)
      })
    },
    getSnailList() {
      let ctx = this
      axios.get('./iowa-morphology.csv').then(response => {
        let data = this.$papa.parse(response.data,{
          "delimiter":",",
          header: true
        });


        data.data.map(function(d){
          if (d.width) { d.width = d.width.split(',')}
          if (d.height) { d.height = d.height.split(',')}
          if (d.whorls) { d.whorls = d.whorls.split(',')}
          d.url = d.species.replace(/ /g,'-').toLowerCase()

          if (d.states){
            d.states = d.states.split(',');
            d.states = d.states.sort();
            d.statesText = d.states.join(', ');
          }

          if (d.height && (d.shape == 'Pupa' || d.shape == 'Fusiform')) {
            ctx.sizes.forEach(function(s){
              if (d.height[0]>=s.low && d.height[1]<=s.high ) {
                d[s.val] = 'y'
              } else {
                d[s.val] = 'n'
              }
            })
          }

          else if (d.width && d.width[0] !== '') {
            ctx.sizes.forEach(function(s){
              let match = false;

              if (d.width[0]>=s.low && d.width[0]<=s.high) {
                match = true
              } else if (d.width[1]>=s.low && d.width[1]<=s.high) {
                match = true
              }

              if (match){
                d[s.val] = 'y'
              }
              else {
               d[s.val] = 'n'
             }



            })
          }



          return d;
        })

        this.snails = data.data;

        data.data.forEach(d => {
          this.snailsFiltered.push(d)
        })
      })
    }
   },
   created(){
     this.getSnailList();
   }
}
</script>

<style lang="scss">
#home-flex {
  display: flex;
  > div {
    width: 50%;
    height: calc(100vh - 82px);
    overflow: auto;
  }
}
</style>
