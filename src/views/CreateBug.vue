<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12 mt-5">
        <h1 class="text-center">Create a Bug Report</h1>
        <h6 class="text-center"><em>There is no Dana, only Zool!</em></h6>
      </div>
    </div>
    <div class="col-12">
      <bug-create />
    </div>
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