<template>
  <div class="data-key">
    <h1>Data Key</h1>

    <table style="margin-bottom:4em;">
      <tr><th>Column Name</th><th>Values</th><th>Description</th></tr>
      <tr v-for="f in fields" :key="f.header">
        <td class="header">{{f.header}}</td>
        <td>
            <template v-if="f.header==='shape'">
              <table>
                <tr v-for="s in shapes" :key="s.label">
                    <td><img style="width:75px" :src="s.img"></td>
                    <td>{{s.label}}</td>
                </tr>
              </table>
            </template>

            <template v-else-if="f.header==='pupa'">
              <table>
                <tr v-for="s in pupa" :key="s.label">
                    <td><img style="width:75px" :src="s.img"></td>
                    <td>{{s.label}}</td>
                </tr>
              </table>
            </template>

            <template v-if="f.header==='whorl_increase'">
              <table>
                <tr v-for="s in whorls" :key="s.name">
                    <td><img style="width:75px" :src="'img/features/'+s.img"></td>
                    <td>{{s.name}} whorl increase</td>
                </tr>
              </table>
              {{f.values}}
            </template>

            <template v-else>
              <img v-if="f.img" :src="'img/features/'+f.img" style="width:75px" />
              {{f.values}}
            </template>
        </td>
        <td>{{f.desc}}</td>
      </tr>

    </table>


  </div>
</template>

<script>
import dk from '@/datakey.js'
export default {
  name: 'DataKey',
  data: function(){
    return {
      fields: dk.data,
      shapes: [],
      pupa: [],
      whorls: dk.whorls
    }
  },
  methods: {
    makeImages: function(){
      let ctx = this
      this.fields[7].values.forEach(function(d){
        let obj = {}
        obj.label = d
        obj.img = "img/features/shape-" + d.toLowerCase().replace(/ /g,'-') + '.svg'
        ctx.shapes.push(obj)
      })
      this.fields[8].values.forEach(function(d){
        let obj = {}
        obj.label = d
        obj.img = "img/features/pupilliform-" + d.toLowerCase().replace(/ /g,'-') + '.svg'
        ctx.pupa.push(obj)
      })
    }
  },
  mounted() {
    this.makeImages()
  }
}
</script>

<style lang="scss">
table {
  text-align:left;

  tr {
    vertical-align: top;
  }

  .header {
    font-weight: bold;
  }
  th {
    border-bottom: 3px solid #333;
  }
  td {
    border-bottom: 1px solid #efefef;
  }
  tr:nth-child(even) td {
    background-color: #efefef;
  }
  table tr {
    vertical-align: middle;
  }
}
</style>
