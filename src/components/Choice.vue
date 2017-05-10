<template>
  <div class="choice" @click.prevent="update" :class="{'done': choice.isDone}">
    {{ choice.text }}

  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default{
    props: ['choice', 'question'],
    methods: {
      ...mapActions({
        updateScore: 'updateScoreAction'
      }),
      update () {
        this.updateScore({choice: this.choice, question: this.question})
      }
    }
  }
</script>
<style lang="scss">
  .choice{
    border: 1px solid #ccc;
    height: 100px;
    margin-bottom: 30px;
    cursor: pointer;
    &:hover{
      box-shadow: rgba(#000, 0.3) 0 0 15px;
    }
    &.done{
      border-color: #2237ff;
    }
  }
</style>
