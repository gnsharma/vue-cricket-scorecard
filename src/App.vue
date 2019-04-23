<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

div.home {
  border: 1px solid red;
  margin: 0 50px;
}

div.scorecard {
  border: 1px solid green;
  margin: 20px;
}

div.bowler {
  border: 1px solid black;
  margin: 20px;
}

div.celebration {
  border: 1px solid black;
  margin: 20px;
  font-size: xx-large;
  font-weight: 900;
}

div.celebration > p {
  font-size: medium;
  font-weight: normal;
}
</style>
