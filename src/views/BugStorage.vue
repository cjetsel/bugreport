<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12 mt-5">
        <h1>Bug Storage</h1>
        <h6><em>That's gotta be some cockroach.</em></h6>
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