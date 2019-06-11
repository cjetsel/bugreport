<template>
  <div class="container bug-list mt-3 rounded">
    <div class="row justify-content-center mt-3">
      <div class="col-12 align-self-center">
        <table class=" mt-3 table table-hover table-dark align-self-center justify-content-center">
          <thead class="position-top">
            <tr>
              <th scope="col">Reported By</th>
              <th scope="col">Title</th>
              <th scope="col">Completed</th>
              <th scope="col">Completed Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bug in bugs" :key="bug._id" @click="viewDetails(bug)"
              :class="{closed: bug.closed, open:!bug.closed}">
              <td>{{bug.creator}}</td>
              <td>{{bug.title}}</td>
              <td v-if="bug.closed"><img src="../assets/check.svg" class="icon" alt=""> </td>
              <td v-else>-----</td>
              <td v-if="bug.closedAt">{{new Date(bug.closedAt).toLocaleDateString()}}</td>
              <td v-else>-----</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>

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
    background-color: rgba(160, 229, 87, 0.356);
  }

  .open {
    background-color: rgba(237, 85, 100, 0.363);
  }
</style>

<style scoped>
  .container {
    background-color: rgba(255, 255, 255, 0.048);
  }

  .icon {
    height: 2rem;
  }
</style>