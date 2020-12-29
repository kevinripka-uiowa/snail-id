<template>
  <div id="snail-list">
    <h1>Snail List</h1>

    <div class="snail-card" v-for="s in snailsFiltered" :key="s.species">
        <h2><router-link :to="{name: 'Species', params: { url:s.url, s} }">{{s.species}}</router-link></h2>
    </div>

  </div>

</template>

<script>

export default {
  name: 'SnailList',
  props: ['snailsFiltered'],
  data: function(){
    return {

    }
  },


}
</script>
