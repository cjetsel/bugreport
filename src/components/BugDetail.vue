<template>
  <div class="mt-5 bug-details container rounded p-3 text-white">
    <div class="row justify-content-center">
      <div class="col-10">
        <h4 class="text-center"><strong>{{currentBug.title}}</strong></h4>
      </div>
    </div>
    <div class="row justify-content-center">

      <div class="col-7">
        <h6 class="text-left"><strong>Created On:</strong>
          {{new Date(currentBug.createdAt).toLocaleDateString()}}<strong>by</strong>
          {{currentBug.creator}} </h6>
        <h6 class="text-left"><strong>Last Update:</strong> {{currentBug.lastUpdate}}</h6>
      </div>
      <div class="col-3">
        <button class="btn btn-primary" @click="toggleClosed(currentBug._id)"
          v-show="!currentBug.closed">Complete</button>
        <h5 class="text-center text-danger" v-show="currentBug.closed"><em>CLOSED</em></h5>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10">
      </div>
    </div>
    <div class="row justify-content-center pt-3">
      <div class="col-10 text-center">
        <h6>Description:</h6>
        <p>{{currentBug.description}}</p>
      </div>

    </div>
    <br />
    <br />
    <form class="form-row py-3 justify-content-center" @submit.prevent="handleSubmit" v-show="!currentBug.closed">
      <div class="col-10">
        <div class="row">
          <div class="col-3">
            <input type="text" class="form-control" v-model="creator" name="creator"></div>
          <div class="col-6">
            <input type="text" class="form-control" v-model="content" name="content"></div>
          <div class="col-3">
            <button class="btn" type="submit">Add Note</button>
          </div>
        </div>
      </div>
    </form>
    <div class="row justify-content-center">
      <div class="col-10 rounded bg-primary mt-1" v-for="note in notes">
        <div class="row">
          <div class="col">
            {{note.creator}}
          </div>
          <div class="col">
            {{note.content}}
          </div>
          <div class="col">
            <img @click="removeComment(note._id)" class="img-fluid" src="../assets/016-remove.svg" alt="">
          </div>
          <!-- <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="completed" name="inlineRadioOptions" id="note._id-C"
              value="option1">
            <label class="form-check-label" for="inlineRadio1">Completed</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="pending" name="inlineRadioOptions" id="note._id-P"
              value="option2">
            <label class="form-check-label" for="inlineRadio2">Pending</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="rejected" name="inlineRadioOptions" id="note._id-R"
              value="option3">
            <label class="form-check-label" for="inlineRadio3">Rejected</label>
          </div> -->





        </div>
      </div>
    </div>

  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: "BugDetail",
    data() {
      return {
        content: '',
        bug: this.$store.state.currentBug._id,
        creator: '',
        flagged: ''
      }
    },
    mounted() {
      this.$store.dispatch('getComments');
    },
    computed: {
      currentBug() {
        return this.$store.state.currentBug;
      },
      notes() {
        return this.$store.state.comments
      }
    },
    components: {

    },
    methods: {
      toggleClosed(id) {
        this.$store.dispatch("toggleClosed", id)
        // this.$router.push({ name: 'home' })
      },
      handleSubmit() {
        let data = {
          content: this.content,
          creator: this.creator
        }
        this.$store.dispatch('addComment', data)
        this.$router.push({ name: 'Detail' })
      },
      removeComment(id) {
        this.$store.dispatch('deleteComment', id)
      }

    }
  };
</script>

<style scoped>
  .container {
    background-color: rgba(93, 155, 236, 0.363);
  }

  .img-fluid {
    width: 2.8rem;
  }
</style>