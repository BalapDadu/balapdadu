<template>
  <div class="card text-center" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ room.name }}</h5>
      <p class="card-text">Players: {{ room.players.length }}/2</p>
      <a class="btn btn-danger" @click.prevent="joinRoom(room.name)"
        ><span>
          <i class="fas fa-fan"></i>
        </span>
        JOIN
      </a>
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
      this.$router.push('/game')
      this.joinName = null
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  color: black;
  background-color: antiquewhite;
  border-radius: 10px;
}
</style>
