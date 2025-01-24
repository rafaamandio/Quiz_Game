<template>
  <section class="score">
    Player <span>{{ this.winCount }}</span> x <span>{{ this.loseCount }}</span> Computer
  </section>
</template>

<script>
  export default{
    props:{
      winCount: Number,
      loseCount: Number,
    }   
}
</script>

<style lang="scss">
  section.score {
    border-bottom: 1px solid black;
    padding: 24px;
    font-size: 18px;
  }
</style>