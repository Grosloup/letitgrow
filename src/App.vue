<template>
  <div id="app">
    <question v-for='question in questions' :question='question' :key='question.text'></question>
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
      reinitialize: 'reinitializeAllAction',
      initMaxScores: 'initMaxScoresAction'
    }),
    replay () {
      this.reinitialize()
    }
  },
  components: {
    Score,
    Question
  },
  mounted () {
    this.initMaxScores()
  }
}
</script>
<style>
  $blue: #609cff;
</style>
