<template>
  <div class="home">
    <button @click="run" class="btn btn-secondary">Run</button>
    <img :style="{left:`${position}%`}" src="../assets/itachi.gif" id="mario">
    <img src="../assets/sasuke.gif" id="yoshi">
    <img src="../assets/sharingan.gif" id="sharingan">
    <img v-if="position === 49" src="../assets/kakashi.gif" id="kakashi">
    <img v-if="position === 49" src="../assets/smoke.gif" id="smoke">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      position: 0
    }
  },
  methods: {
    run () {
      console.log('masuk run')
      const diceroll = 49
      for (let i = 0; i < diceroll; i++) {
        this.position++
      }
      console.log(this.position)
      if (this.position > 85) {
        alert('win!')
      }
      if (this.position === 49) {
        setTimeout(() => {
          this.position -= 15
        }, 2500)
      }
    }
  }
}
</script>

<style scoped>
#mario{
  height: 200px;
  position: absolute;
  bottom : 5rem;
  left : 0%;
  z-index : 1;
}
#yoshi{
  height: 150px;
  position: absolute;
  bottom : 6rem;
  left : 0%;
  z-index : 1;
}
#sharingan{
  height: 180px;
  position: absolute;
  bottom : 8rem;
  left : 85%;
  z-index : 0;
}
#kakashi{
  height: 180px;
  position: absolute;
  bottom : 7rem;
  left : 55%;
  z-index : 2;
}
#smoke{
  height: 180px;
  position: absolute;
  bottom : 7rem;
  left : 55%;
  z-index : 3;
}
</style>
