<template>
  <div id="species">
    <h1>{{snail.species}}</h1>
    <h2>{{snail.common}}</h2>
    <p>{{snail.family}}</p>
    <table>
      <tr><th>Shell Shape</th><td>{{snail.shape }}</td></tr>
      <tr><th>Umbilicus</th><td>{{umbilicus.join(', ')}}</td></tr>
      <tr><th>Width</th><td>{{snail.width[0]}}mm&ndash;{{snail.width[1]}}mm</td></tr>
      <tr><th>Height</th><td>{{snail.height[0]}}mm&ndash;{{snail.height[1]}}mm</td></tr>
      <tr><th>Whorls</th><td>{{snail.whorls[0]}}&ndash;{{snail.whorls[1]}}</td></tr>

    </table>



    <p>{{snail.notes}}</p>
    <!-- <vue-markdown :source="snail.notes"></vue-markdown> -->
    <SnailMap :states="snail.states" :statesText="snail.statesText" />
  </div>
</template>

<script>
// import VueMarkdown from 'vue-markdown'
import SnailMap from '@/components/SnailMap.vue'
import burch from '../burch.js'

export default {
  components: {
    SnailMap,
    // VueMarkdown
  },
 data: function(){
   return{
     // snail: this.$route.params.s,
     obj: burch
   }
 },
 computed: {
   snail() {
     return this.$route.params.url.charAt(0).toUpperCase() + this.$route.params.url.slice(1).replace(/-/g,' ')
   },
   umbilicus(){
     let ctx = this.snail
     let u = []
     let fields = ['imperforate','perforate','rimate','umbilicate']
     fields.forEach(function(d){
       if (ctx[d] === 'y') {u.push(d)}
     })
     return u
   }
 },
 methods: {
   yesNo: function(v){
     return (v === 'y') ? 'yes' : 'no'
   }
 }
}
</script>

<style lang="scss">
#species {
  text-align: left;
}
</style>
