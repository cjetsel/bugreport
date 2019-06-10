<template>
  <div class="mt-5 bug-details container rounded p-3 text-white">
    <div class="row justify-content-center">
      <div class="col-10">
        <h2 class="text-center">{{currentBug.title}}</h2>
      </div>
    </div>
    <div class="row justify-content-center">

      <div class="col-7">
        <div class="row">
          <div class="col-6">
            <h6 class="text-left"><strong>Created On:</strong>
              {{new Date(currentBug.createdAt).toLocaleDateString()}}</h6>
          </div>
          <div class="col-6">
            <h6 class="text-right"><strong>Created By: </strong>
              {{currentBug.creator}}</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h6 class="text-left"><strong>Last Update:</strong>
              {{new Date(currentBug.updatedAt).toLocaleDateString()}}
            </h6>
          </div>
        </div>
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
        <h6><strong>Description:</strong></h6>
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
      <div class="col-10 rounded note mt-1 align-self-center" v-for="note in notes">
        <div class="row">
          <div class="col-2 align-self-center">
            {{note.creator}}
          </div>
          <div class="col-7 align-self-center">
            {{note.content}}
          </div>
          <div class="col-2 align-self-center">
            {{new Date(note.createdAt).toLocaleDateString()}}
          </div>
          <div class="col-1 align-self-center text-right">
            <img @click="removeComment(note._id)" class="img-fluid" src="../assets/trash.svg" alt="">
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
  . .container {
    background-color: rgba(93, 155, 236, 0.363);
  }

  strong {
    font-size: 1.3rem;
  }

  .img-fluid {
    width: 2.5rem;
  }

  .note {
    background-color: #434A54;
  }
</style>