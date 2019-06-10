<template>
  <div class="home container-fluid pt-5">
    <div class="row">
      <div class="col-12">
        <h1>Welcome to Base.</h1>
      </div>
      <div class="col-12">
        <h4><strong>Your mission:</strong> Capture and Exterminate Bugs</h4>
      </div>
      <div class="col-12">
        <small><em class="blue">Generally you don't see that kind of behavior in a major appliance</em></small>
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