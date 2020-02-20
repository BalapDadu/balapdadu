<template>
  <div>
      <form @submit.prevent="addPlayer">
        <input type="text" v-model="form.name">
        <button type="submit">Tambah Player</button>
      </form>
      <br>
      <h2 v-if="value > 0">Dapat Angka : {{ value }}</h2>
      <div v-if="players != null">
        <div :key="i" v-for="(player, i) in players">
          <h2>Player {{ player.name }} : {{ player.score }}</h2>
          <button v-if="turn === i" @click.prevent="kocokDadu">Kocok Dadu</button>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        score: 0,
      },
      players: [],
      activePlayer: null,
      turn: 0,
      value: 0
    }
  },
  mounted () {
    this.$socket.on('player', (object) => {
      this.players.push(object)
    })
    this.$socket.on('dadu', (object) => {
      this.turn = object.turn === 0 ? 1 : 0
      this.players[object.turn].score += object.value
      this.value = object.value
    })
  },
  methods: {
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
<style>

</style>
