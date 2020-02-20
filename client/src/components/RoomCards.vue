<template>
  <div>
    <div class="card-1">
      <h2>{{ room.name }}</h2>
      <div id="members" v-for="(member, i) in room.players" :key="i">
        <h4>{{ member }}</h4>
      </div>
      <a href="#" @click.prevent="joinRoom(room.name)">Join Room</a>
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
