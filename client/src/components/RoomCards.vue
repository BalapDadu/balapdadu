<template>
  <div class="card text-center" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ room.name }}</h5>
      <p class="card-text">Players: {{ room.RoomActives.length }}/2</p>
      <a v-if="room.RoomActives.length < 2" class="btn btn-danger" @click.prevent="joinRoom(room)"
        ><span>
          <i class="fas fa-fan"></i>
        </span>
        JOIN
      </a>
      <p v-else class="text-center text-danger">Room Full!</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RoomCards',
  props: ['room'],
  methods: {
    joinRoom(room) {
      const form = {
        RoomId: room.id,
        UserId: localStorage.id
      }
      axios
        .post(`${this.$store.state.BASE_URL}/rooms/join`, form)
        .then(({ data }) => {
          this.$socket.emit('join-room', room.id)
          this.$router.push({ name: 'Game', params: { roomId: data.RoomId, userId: localStorage.id } })
          this.joinName = null
        })
        .catch(({ response }) => {
          console.log(response)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  color: black;
  background-color: antiquewhite;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>
