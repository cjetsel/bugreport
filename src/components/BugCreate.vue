<template>
  <div class="container bug-create mt-3 rounded p-3">
    <form class="form-row justify-content-center" @submit.prevent="handleSubmit">
      <div class="col-6">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Title</span>
          </div>
          <input type="text" placeholder="Title" name="title" v-model="title" id="title" class="form-control">
        </div>
      </div>
      <div class="col-6">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Reported by</span>
          </div>
          <input type="text" id="creator" name="creator" v-model="creator" placeholder="Name" class="form-control">
        </div>
      </div>
      <div class="col-12 mt-3">
        <label for="description">Description of Bug:</label>
        <textarea class="form-control" v-model="description" id="description" rows="5"></textarea>
      </div>
      <div class="col-3">
        <button type="submit" class="btn btn-success">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>

  export default {
    name: "BugCreate",
    data() {
      return {
        title: '',
        creator: '',
        description: ''
      }
    },
    computed: {

    },
    methods: {
      handleSubmit() {
        let data = {
          title: this.title,
          creator: this.creator,
          description: this.description
        }
        this.$store.dispatch('createBug', data)
        this.$router.push({ name: 'home' })
      }
    },
    components: {

    }
  }
</script>

<style scoped>
  .container {
    background-color: rgba(255, 255, 255, 0.048);
  }
</style>