<template>
  <div class="home container-fluid">
    <bug-list />
  </div>
</template>

<script>
  // @ is an alias to /src
  import BugList from "@/components/BugList.vue";

  export default {
    name: "home",
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
  .card:hover {
    border: 2px solid blue;
  }

  .selected {
    border: 3px solid green;
  }
</style>