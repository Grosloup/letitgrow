<template>
  <div class="question" :class="{'show-explains': explainShown}">

      <div class="question__text">
        {{ question.text }}
      </div>


      <!--<mini-score :question='question'></mini-score>-->

      <div class="choices">
        <div class="choice-wrapper" v-for='choice in question.choices' :key='choice.text'>
          <choice :choice='choice' :question='question'></choice>
        </div>
      </div>



    <div class="question__" v-show="question.isStarted">
        <button @click.prevent="replay" class="question__btn">Rejouez</button>
        <button @click.prevent="terminate" class="question__btn">Vérifiez vos choix</button>
    </div>

    <div v-if="hasWin===true">Gagné</div>
    <div v-if="hasWin===false">Perdu</div>
    <div v-if="hasWin!==null"><button @click.prevent="showExplains" class="question__btn"><span v-if="explainShown">Cacher</span><span v-else>Voir</span> les explications</button></div>
  </div>

</template>
<style lang="scss">
  $blue: #609cff;
  .question {
    margin: 20px 0;

    .question__text{
      padding: 15px;
    }

    .question__btn{
      display: inline-block;
      vertical-align: middle;
      outline: none;
      text-decoration: none;
      cursor: pointer;
      border: none;
      background-color: $blue;
      color: #ffffff;
      font-weight: 700;
      padding: 10px 15px;
      border-radius:5px;
    }

    .choices {
      display: flex;
      flex-wrap: wrap;
      transition: all .3s;
    }

    &.show-explains{

    }
  }

</style>
<script>
  import { mapActions } from 'vuex'
  import Choice from './Choice'
  import MiniScore from './MiniScore'
  export default {
    props: ['question'],
    components: {
      Choice, MiniScore
    },
    data () {
      return {
        explainShown: false,
        hasWin: null
      }
    },
    methods: {
      ...mapActions({
        reinitialize: 'reinitializeQuestionAction'
      }),
      terminate () {
        let score = this.question.score
        let maxScore = this.question.maxScore
        if (score !== maxScore) {
          this.hasWin = false
        } else {
          this.hasWin = true
        }
      },
      replay () {
        this.hasWin = null
        this.explainShown = false
        this.reinitialize({question: this.question})
      },
      showExplains () {
        this.explainShown = !this.explainShown
      }
    }
  }
</script>
