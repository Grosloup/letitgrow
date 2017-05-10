<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <score></score>
          <button @click="replay">replay</button>
        </div>
        <div class="col-md-8">

          <question v-for='question in questions' :question='question' :key='question.text'></question>

        </div>
        <div class="col-md-2"></div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Score from './components/Score'
import Question from './components/Question'

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      questions: 'questionsGetter'
    })
  },
  methods: {
    ...mapActions({
      reinitialize: 'reinitializeAllAction'
    }),
    replay () {
      this.reinitialize()
    }
  },
  components: {
    Score,
    Question
  }
}
</script>

