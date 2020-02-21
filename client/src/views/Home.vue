<template>
  <div class="home">
    <!-- add players -->
    <div>
      <form v-if="players.length < 2" @submit.prevent="addPlayer">
        <br>
        <input type="text" v-model="form.name">
        <button type="submit">Tambah Player</button>
      </form>
      <br>
      <h4 v-if="players.length < 2" class="text-warning">Untuk memulai game harus ada 2 player!</h4>
      <h4 v-if="value > 0">{{players[turn].name}} dapat mendapat : {{ value }} langkah</h4>
      <div v-if="players != null">
        <div :key="i" v-for="(player, i) in players">
          <img :style="{left:`${player.score}%`}" :src="i === 0 ? imgUrl.itachi : imgUrl.sasuke " :id="i === 0 ? 'mario' : 'yoshi'">
         <button :class="`${i == 0 ? 'text-primary' : 'text-danger'} score`">Player {{ player.name }} : {{ player.score }}</button>
          <img class="dice" src="../assets/dice.gif" v-if="turn === i && players.length === 2" @click.stop="kocokDadu">
          <!-- <button v-if="turn === i && players.length === 2" @click.stop="kocokDadu">Kocok Dadu</button> -->
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
  created () {
    const audio = new Audio(backsound)
    audio.play()
  },
  mounted () {
    this.$socket.on('player', (object) => {
      this.players.push(object)
    })
    this.$socket.on('dadu', (object) => {
      this.turn = object.turn === 0 ? 1 : 0
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
      this.form.name = ''
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
.text-danger{
  position: absolute;
  font-size: 10px;
  z-index: 4;
}
.text-primary{
  position: absolute;
  z-index: 4;
}
.dice{
  position: absolute;
  z-index: 5;
  left: 50%;
  margin-left: -147px;
  height: 30vh;
}
</style>
