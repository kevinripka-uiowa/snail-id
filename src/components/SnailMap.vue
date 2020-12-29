<template>
  <div>
    <p>{{statesText}}</p>
    <div id="map"></div>
  </div>
</template>

<script>
import * as d3 from 'd3'
import * as geo from 'd3-geo'
import axios from 'axios'
import * as topojson from 'topojson'
import states from "@/states.js"
export default {
  name: 'SnailMap',
  props: ['states','statesText'],
  data: function(){return{
      maptopo: null,
      stateList: states.stateList
    }
  },
  methods: {
    getMapJson(){
      let ctx = this
      // axios.get('./states-albers-10m.json').then(response => {
      //     ctx.maptopo = response.data
      //     ctx.buildMap()
      // })
      axios.get('./us-canada-topo.json').then(response => {
          ctx.maptopo = response.data
          ctx.buildMap()
      })
    },
    buildMap(){
      let ctx = this
      let projection = d3.geoAlbers().center([-38,98]).scale(600).translate([650,100]);
      let path = geo.geoPath().projection(projection);

      d3.select("#map")

      let svg = d3.select("#map").append('svg')
      // .style('width', '100%')
      // .style('height', 'auto');
        .attr("viewBox", '0 0 1500 700')
        .attr("preserveAspectRatio",'xMinYMin')

      let geojson = topojson.feature(ctx.maptopo, ctx.maptopo.objects.ne_10m_admin_1_states_provinces);

      svg.selectAll("path").data(geojson.features).enter().append("path").attr("d", path).attr('id',d=>d.properties.name.replace(/ /g,'-'));

      this.states.forEach(function(s){
        let stateObj = ctx.stateList.filter(d=>s === d.v)[0]
        svg.select('#' + stateObj.n.replace(/ /g,'-')).classed("present",true)
      });
      axios.get('./great_lakes_topo.json').then(response => {
          let lakes = response.data
          let lakejson = topojson.feature(lakes, lakes.objects.ne_10m_lakes);
          let g = svg.append('g')
          g.selectAll("path").data(lakejson.features).enter().append("path").attr("d", path)

      })
    }
  },
  mounted(){
    this.getMapJson()
  }

}
</script>

<style>
  #map {
    max-width:800px;
    height: auto;
    margin: 0 auto;
  }
  path {
    stroke-width: 1px;
    stroke: #000;
    fill: #fff;
  }
  path.present {
    fill: green;
  }
</style>
