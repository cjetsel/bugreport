<template>
  <div class="container">

    <div class="row">
      <bug-detail />
    </div>
  </div>
</template>

<script>
  import BugDetail from "@/components/BugDetail.vue"
  // import { setTimeout } from 'timers';
  export default {
    name: "Detail",
    props: ["id"],
    mounted() {
      let currentBug = this.$store.state.currentBug
      if (!currentBug._id) {
        this.$store.dispatch("getBug", this.id);
      }
      this.$store.dispatch("getCurrentComments", this.id)
      this.$store.dispatch("getBug", this.id);
      this.$store.dispatch("getBugs")

      // setTimeout(() => {
      //   if (!this.currentBug) {
      //     this.$router.push({ name: "home" })
      //   }
      // }, 3000)

    },
    computed: {
      currentBug() {
        return this.$store.state.currentBug
      },
      notes() {
        return this.$store.state.comments
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