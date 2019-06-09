<template>
  <div class="container">
    <bug-detail />
  </div>
</template>

<script>
  import BugDetail from "@/components/BugDetail.vue"
  export default {
    name: "Detail",
    computed: {
      currentBug() {
        return this.$store.state.currentBug
      }
    },
    methods: {

    },
    components: {
      BugDetail
    }
  }
</script>

<style>
</style>