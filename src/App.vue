<template>
  <div id="app" class="container-fluid">
    <div class="row header fixed-top justify-content-center bg-dark">
      <div class="spacer"></div>
      <div class="col-auto">
        <div class="row justify-content-center pt-3">
          <div class="col-auto align-self-center">
            <h1 class="m-auto">BUG <img src="./assets/scan.svg" class="logo m-auto text-center" alt=""> BUSTERS</h1>
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-12">
            <h6><em>There's something strange in the neighborhood... who you gonna call?</em></h6>
          </div>
        </div>
      </div>
      <div class="col-3"></div>
      <div class="col-3 p-0 "></div>
    </div>
    <div class="row d-flex">
      <div class="col-3 fixed bg-dark p-0">
        <router-link to="/">
          <img src="./assets/planet-earth.svg" class="icon" alt="">
          <h1>HOME</h1>
        </router-link><br>
        <router-link to="/bugstorage">
          <img src="./assets/011-bug.svg" class="icon" alt="">
          <h1>BUG STORAGE</h1>
        </router-link><br>
        <router-link to="/create">
          <img src="./assets/013-bug-2.svg" class="icon" alt="">
          <h1>CAPTURE BUG</h1>
        </router-link><br>
      </div>
      <div class="col-9 margin-push" id="main">
        <router-view />
      </div>
    </div>


  </div>
</template>

<style>
  * {
    outline: 1px solid blueviolet;
  }

  em {
    color: rgba(184, 184, 184, 0.664);
  }

  h1:hover {
    color: #5D9CEC;
  }

  .padding-center {
    margin-top: 1.5%;
  }

  .logo {
    height: 12vh;
  }

  .icon {
    height: 7vh;
  }

  .header {
    height: 20vh;

  }

  .spacer {
    width: 45vw;
    padding: 0;
  }

  .fixed {
    background-color: rgb(43, 43, 43);
    position: fixed !important;
    height: 100%;
    margin-top: 20vh;
    width: 20vw;
  }

  .margin-push {
    width: 80vw;
    margin-left: 22.5vw;
    margin-top: 20vh;
  }

  #app {
    font-family: 'Abel', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
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

  .body {
    background-color: rgb(43, 43, 43);
    overflow-x: hidden;
    overflow-y: scroll;
  }


  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
</style>