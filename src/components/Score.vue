<template>
    <div>
        {{ totalScore }}
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default{
    computed: {
      ...mapGetters({
        totalScore: 'totalScoreGetter'
      })
    }
  }
</script>
