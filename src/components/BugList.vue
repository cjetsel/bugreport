<template>
  <div class="container bug-list mt-3">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Reported By</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bug in bugs" :key="bug._id" @click="viewDetails(bug)" :class="{closed: bug.closed}"">
          <!-- <router-link :to=" {name: 'details' , params:{id: bug._id}}"> -->
          <td>{{bug.creator}}</td>
          <td>{{bug.title}}</td>
          <td>{{bug.user}}</td>
          <td>{{bug.closed}}</td>
          <!-- </router-link> -->
        </tr>

      </tbody>
    </table>

  </div>
</template>

<script>

  export default {
    name: "buglist",
    data() {
      return {}
    },
    computed: {
      bugs() {
        return this.$store.state.bugs
      }
    },
    methods: {
      viewDetails(bug) {
        this.$store.dispatch('setBug', bug)
        this.$router.push({ name: 'Detail', params: { id: bug._id } })
      }
    },
    components: {

    }
  }
</script>

<style>
  .closed {
    background-color: crimson;
  }
</style>