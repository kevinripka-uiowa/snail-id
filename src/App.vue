<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/family">Family Descriptions</router-link> |
      <router-link to="/familykey">Family Key</router-link> |
      <router-link to="/specieskey">Species Key</router-link> |
      <router-link to="/species-in-key">Species In Key</router-link> |
      <router-link to="/datakey">Data Key</router-link>
    </div>
    <keep-alive>
    <router-view/>
  </keep-alive>
  </div>
</template>

<style>

* {
  box-sizing: border-box;
}

html, body {
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0 auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
