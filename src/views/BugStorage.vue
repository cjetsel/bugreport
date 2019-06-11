<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12 mt-5">
        <h1>Bug Storage</h1>
        <small><em>Generally you don't see that kind of behavior in a major appliance</em></small>
      </div>
    </div>
    <div class="row">
      <bug-list />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import BugList from "@/components/BugList.vue";

  export default {
    name: "BugStorage",
    mounted() {
      this.$store.dispatch('getBugs')
    },
    computed: {

    },
    methods: {

    },
    components: {
      BugList
    }
  }
</script>

<style>
</style>