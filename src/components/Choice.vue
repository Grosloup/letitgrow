<template>
  <div class="choice" @click.prevent="update" :class="{'done': choice.isDone}">
    <div class="choice__img"><img v-bind:src="choice.imgUrl"></div>
    <div class="choice__text">{{ choice.text }}</div>
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
  $choiceDims: 200px;
  $blue: #609cff;
  .choice{
    position: relative;
    border: 5px solid #fff;
    // height: $choiceDims;
    width: $choiceDims;
    margin: 10px;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    box-shadow: rgba(#000, 0.7) 0 0 1px;
    &:hover{
      box-shadow: rgba(#000, 0.3) 0 0 15px;
    }
    &.done{
      border: 5px solid $blue;
    }

    .choice__img{
      img{
        width: 100%;
        height: auto;
        display: block;
      }
    }
    .choice__text{

      text-align: center;
      padding: 10px 0;

      color: $blue;
      font-weight: 700;
      font-size: 14px;

      min-height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
