<template>
  <div class="home container-fluid">
    <div class="col-12 text-center">
      <img style="height: 9rem;" src="https://media.giphy.com/media/836N0RI8iMRMOqyc3L/giphy.gif" alt="">
    </div>
    <div class="row">
      <div class="col-12">
        <h1>Welcome to Base.</h1>
      </div>
      <div class="col-12">
        <h4><strong>Your mission:</strong> Capture and Exterminate Bugs</h4>
      </div>
    </div>
    <div class="col-12 mt-5">
      <h3>View captured bugs in the <span>Bug Storage</span> or add your own in the <span>Capture Bugs</span>. Happy
        Hunting!</h3>
      <small>And remember... DON'T CROSS THE STREAMS!!!</small>
    </div>

  </div>
</template>

<script>
  // @ is an alias to /src
  import BugList from "@/components/BugList.vue";

  export default {
    name: "home",
    computed: {

    },
    methods: {

    },
    components: {
    }
  }
</script>

<style>
  span {
    font-weight: bold;
  }

  .blue {
    color: #5D9CEC !important;
  }

  small {
    color: #A0E557;
  }
</style>