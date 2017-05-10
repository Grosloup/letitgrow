<template>
  <div class="question">
    <div class="row">
      {{ question.text }}
      <mini-score :question='question'></mini-score>
      <div class="col-md-2" v-for='choice in question.choices' :key='choice.text'>
        <choice :choice='choice' :question='question'></choice>
      </div>



    </div>
    <div class="row">
      <div class="col-md-12">
        <button @click.prevent="replay" >replay</button>
        <button @click.prevent="terminate">ok</button>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapActions } from 'vuex'
  import Choice from './Choice'
  import MiniScore from './MiniScore'
  export default {
    props: ['question'],
    components: {
      Choice, MiniScore
    },
    methods: {
      ...mapActions({
        reinitialize: 'reinitializeQuestionAction'
      }),
      terminate () {},
      replay () {
        this.reinitialize({question: this.question})
      }
    }
  }
</script>
<style>
  .question{
    margin: 20px 0;
  }
</style>
