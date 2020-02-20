<template>
  <div class="home">
    <!-- add players -->
    <div>
      <form @submit.prevent="addPlayer">
        <input type="text" v-model="form.name">
        <button type="submit">Tambah Player</button>
      </form>
      <br>
      <h2 v-if="value > 0">Dapat Angka : {{ value }}</h2>
      <div v-if="players != null">
        <div :key="i" v-for="(player, i) in players">
          <img :style="{left:`${player.score}%`}" :src="i === 0 ? imgUrl.itachi : imgUrl.sasuke " :id="i === 0 ? 'mario' : 'yoshi' ">
          <h2>Player {{ player.name }} : {{ player.score }}</h2>
          <button v-if="turn === i" @click.stop="kocokDadu">Kocok Dadu</button>
          <img v-if="player.score === 49" src="../assets/kakashi.gif" id="kakashi">
        </div>
      </div>
  </div>

    <!-- <img :style="{left:`${positionOne}%`}" src="../assets/itachi.gif" id="mario">
    <img :style="{left:`${positionTwo}%`}" src="../assets/sasuke.gif" id="yoshi">
    <img src="../assets/sharingan.gif" id="sharingan"> -->
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
      form: {
        name: '',
        score: 0
      },
      players: [],
      turn: 0,
      value: 0,
      imgUrl: {
        sasuke: require('@/assets/sasuke.gif'),
        itachi: require('@/assets/itachi.gif')
      }
    }
  },
  mounted () {
    this.$socket.on('player', (object) => {
      this.players.push(object)
    })
    this.$socket.on('dadu', (object) => {
      console.log(`ini score player ${object.turn} di mounted : ` + this.players[object.turn].score)
      this.turn = object.turn === 0 ? 1 : 0
      console.log(this.players[object.turn].score)
      this.players[object.turn].score += object.value
      if (this.players[object.turn].score === 49) {
        setTimeout(() => {
          this.players[object.turn].score -= 15
        }, 1500)
      }
      this.value = object.value
    })
  },
  methods: {
    run () {
      console.log('masuk run')
      const diceroll = Math.floor(Math.random() * 6) + 1
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
    },
    kocokDadu () {
      const value = Math.floor(Math.random() * 6) + 1
      this.value = value
      this.$socket.emit('dadu', { turn: this.turn, value: this.value })
    },
    addPlayer () {
      this.$socket.emit('player', { ...this.form })
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
