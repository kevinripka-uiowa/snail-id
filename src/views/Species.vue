<template>
  <div id="species">
    <h1>{{snail.info.species}}</h1>
    <h2>{{snail.info.common}}</h2>
    <p>{{snail.info.family}}</p>
    <p v-if="snail.info.notes">{{snail.info.notes}}</p>

    <div v-if="snail.info.key_img && snail.info.key_img.length > 0">
      <img v-for="i in snail.info.key_img" :src="'img/key/' + i" :key="'keyimg'+i" class="key_img" />
    </div>
    <div v-if="snail.info.images && snail.info.images.length > 0">
      <a v-for="i in snail.info.images" :key="'img'+i" :href="'img/species/'+ snail.info.img_folder + '/' + i" target="_blank">
        <img :src="'img/species/'+ snail.info.img_folder + '/' + i" class="img" />
      </a>
    </div>

    <table>
      <!-- <tr><th>Shell Shape</th><td>{{snail.shape }}</td></tr>
      <tr><th>Umbilicus</th><td>{{umbilicus.join(', ')}}</td></tr>
      <tr><th>Width</th><td>{{snail.width[0]}}mm&ndash;{{snail.width[1]}}mm</td></tr>
      <tr><th>Height</th><td>{{snail.height[0]}}mm&ndash;{{snail.height[1]}}mm</td></tr>
      <tr><th>Whorls</th><td>{{snail.whorls[0]}}&ndash;{{snail.whorls[1]}}</td></tr> -->

    </table>


    <!-- <vue-markdown :source="snail.notes"></vue-markdown> -->
    <SnailMap :states="snail.info.states" :statesText="snail.info.statesText" />

    <div class="flex">

      <div>
          <h3>Identify {{snail.info.f_key}}</h3>
          <ul v-for="(r,i) in snail.famkey" :key="'famkey'+i" class="key">
              <li v-for="item in r" :key="item.n">{{item.item.n}} {{item.item.l}}</li>
          </ul>
      </div>

    <template v-if="snail.routes">
      <div>
        <h3>Identify {{snail.info.species}}</h3>
      <ul v-for="(r,i) in snail.routes" :key="'route'+i" class="key">
        <li v-for="item in r" :key="item.n">{{item.item.n}} {{item.item.l}}
          <img v-if="item.img" :src="'img/'+item.img" />
          <img v-if="item.img2" :src="'img/'+item.img2" />
        </li>
        <li v-if="snail.info.f_key === 'pupillidae' || snail.info.f_key === 'gastrocopta' || snail.info.f_key === 'vertigo' || snail.info.f_key === 'columella' || snail.info.f_key === 'pupilla' || snail.info.f_key === 'pupoides'">

          <a href="img/pupa-nekola/pupa-teeth.jpg" target="_blank"><img src="img/pupa-nekola/pupa-teeth.jpg" /></a>
          <a href="img/pupa-nekola/shell-features.jpg" target="_blank"><img src="img/pupa-nekola/shell-features.jpg" /></a>
          <a href="img/pupa-nekola/fig1.jpg" target="_blank"><img src="img/pupa-nekola/fig1.jpg" /></a>
          <a href="img/pupa-nekola/fig2.jpg" target="_blank"><img src="img/pupa-nekola/fig2.jpg" /></a>
          <a href="img/pupa-nekola/fig3.jpg" target="_blank"><img src="img/pupa-nekola/fig3.jpg" /></a>
          <a href="img/pupa-nekola/fig4.jpg" target="_blank"><img src="img/pupa-nekola/fig4.jpg" /></a>
          <a href="img/pupa-nekola/fig5.jpg" target="_blank"><img src="img/pupa-nekola/fig5.jpg" /></a>
          <a href="img/pupa-nekola/fig6.jpg" target="_blank"><img src="img/pupa-nekola/fig6.jpg" /></a>
        </li>
      </ul>
    </div>
    </template>


  </div> <!-- .flex -->

  </div>
</template>

<script>
// import VueMarkdown from 'vue-markdown'
import SnailMap from '@/components/SnailMap.vue'
// import burch from '../burch.js'
// import routes from '../routes.js'
import axios from 'axios'

export default {
  components: {
    SnailMap,
    // VueMarkdown
  },
 data: function(){
   return{
     snail: {
       info: {
         species: null,
         common: null,
         family: null,
         states: [],
         status: null,
         author: null
       },
       routes: null,
       famkey: null
     }
     // obj: burch,
     // routes: routes
   }
 },
 computed: {
   // snail() {
   //   return this.$route.params.url.charAt(0).toUpperCase() + this.$route.params.url.slice(1).replace(/-/g,' ')
   // },
   // umbilicus(){
   //   let ctx = this.snail
   //   let u = []
   //   let fields = ['imperforate','perforate','rimate','umbilicate']
   //   fields.forEach(function(d){
   //     if (ctx[d] === 'y') {u.push(d)}
   //   })
   //   return u
   // }
 },
 methods: {
   getSnailInfo: function(){
     axios.get(`http://localhost:3001/snail/?snail=${this.$route.params.url}&timestamp=${new Date().getTime()}`).then(response => {
        this.snail = response.data
        this.snail.info.statesText = this.snail.info.states.join(', ')
        this.snail.info.img_folder = this.snail.info.species.replace(/ /g,'-')
     }).catch(function (error) {
    // handle error
    console.log(error);
  })
   },
   yesNo: function(v){
     return (v === 'y') ? 'yes' : 'no'
   },
   stateText: function(){
     this.snail.info.statesText = this.snail.info.states.join(', ')
   }
 },
 watch: {
   '$route':'getSnailInfo',
   'snail': 'stateText'
 },
 created(){
   this.getSnailInfo()
 }
}
</script>

<style lang="scss">
#species {
  text-align: left;
}
#species .flex {
  display:flex;
  flex-wrap: nowrap;
  > div {
    margin: 0 1rem;
  }
}
.img {
  max-width: 250px;
  max-height:250px;
  object-fit:contain;
}
.key_img {
  max-width:500px;
}
.key {
  width:500px;
  margin:2rem auto;
  border-top: 5px solid green;

  li {
    padding: 1rem 0;
    border-bottom: 1px solid #efefef;
  }
  img {
    max-width:100%;
  }
}
</style>
