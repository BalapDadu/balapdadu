<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="card-title">
          <h3>{{ room.name }}</h3>
        </div>
        <div class="card-subtitle">Players: {{ room.players.length }}/2</div>

        <a href="#" class="card-link" @click.prevent="joinRoom(room.name)"
          v-if="room.players.length < 2">Join Room</a
        >
        <h6 v-else>Room Full</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomCards',
  props: ['room'],
  methods: {
    joinRoom(room) {
      this.$socket.emit('join-room', {
        name: room,
        username: localStorage.getItem('username')
      })
      this.$socket.on('fetch-rooms', rooms => {
        console.log(rooms)
        this.roomList = rooms
      })
      this.joinName = null
    }
  }
}
</script>

<style lang="scss" scoped>
.card-1 {
  border: 2px solid black;
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  height: 150px;
}
.card-1 h2 {
  margin-bottom: 15px;
}
.card-1 a {
  width: 100px;
  padding: 15px;
  background: grey;
  color: white;
}
</style>
