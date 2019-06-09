<template>
  <div id="app" class="container-fluid">
    <div class="row">HEADER</div>
    <div class="row">
      <div id="nav" class="col-3">
        <router-link to="/">Home</router-link><br>
        <router-link to="/create">Report Bug</router-link>
      </div>
      <div class="col-9" id="main">
        <router-view />
      </div>
    </div>

  </div>
</template>

<style>
  * {
    outline: 1px solid blueviolet;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

  }

  #nav a.router-link-exact-active {
    color: red;
  }
</style>