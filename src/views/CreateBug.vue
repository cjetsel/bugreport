<template>
  <div class="container-fluid">
    <h1>Create a Bug Report</h1>
    <bug-create />
  </div>
</template>

<script>
  // @ is an alias to /src
  import BugCreate from "@/components/BugCreate.vue";

  export default {
    name: "CreateBug",
    computed: {

    },
    methods: {

    },
    components: {
      BugCreate
    }
  }
</script>

<style>

</style>