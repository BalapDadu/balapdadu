<template>
  <div class="home">
    <!-- add players -->
    <div>
      <!-- <form v-if="players.length < 2" @submit.prevent="addPlayer">
        <br>
        <input type="text" v-model="form.name">
        <button type="submit">Tambah Player</button>
      </form>
      <br> -->
      <h4 v-if="players.length < 2" class="text-warning">Untuk memulai game harus ada 2 player!</h4>
      <h4 v-if="value > 0">Anda dapat mendapat : {{ value }} langkah</h4>
      <div v-if="players != null">
        <div :key="i" v-for="(player, i) in players">
          <img :style="{left:`${player.score}%`}" :src="i === 0 ? imgUrl.itachi : imgUrl.sasuke " :id="i === 0 ? 'mario' : 'yoshi'">
          <h4 :class="i == 0 ? 'text-primary' : 'text-danger'">Player {{ player.name }} : {{ player.score }}</h4>
          <button v-if="turn === i && players.length === 2 && player.id == $route.params.userId" @click.stop="kocokDadu">Kocok Dadu</button>
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
import axios from 'axios'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      form: {
        id: '',
        name: '',
        score: 0
      },
      players: [],
      played: 0,
      turn: 0,
      value: 0,
      imgUrl: {
        sasuke: require('@/assets/sasuke.gif'),
        itachi: require('@/assets/itachi.gif')
      }
    }
  },
  mounted () {
    // this.$socket.emit('detail-room')
    this.getPlayer()
    this.$socket.on('player', (object) => {
      this.players = object
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
    kocokDadu (id) {
      const value = Math.floor(Math.random() * 6) + 1
      this.value = value
      this.$socket.emit('dadu', { turn: this.turn, value: this.value, playerId: id })
    },
    getPlayer() {
      axios
        .get(`${this.$store.state.BASE_URL}/game/${this.$route.params.roomId}`)
        .then(({ data }) => {
          const dataUser = []
          data.map(user => {
            this.form.id = user.id
            this.form.name = user.name
            dataUser.push({ ...this.form })
          })
          this.$socket.emit('player', {
            user: dataUser,
            id: this.$route.params.roomId
          })
        })
        .catch(({ response }) => {
          console.log(response)
        })
    }
    // addPlayer () {
    //   this.$socket.emit('player', { ...this.form })
    //   this.form.name = ''
    // }
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
