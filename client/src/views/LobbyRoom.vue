<template>
  <div>
    <div id="username" v-if="!gameStart">
      <input type="text" v-model="username" />
      <a href="#" @click.prevent="createUsername">Start</a>
    </div>
    <input type="text" v-model="roomName" />
    <a href="#" @click.prevent="createRoom">Create Room</a>
    <div class="room">
      <h4>Ini contoh room :</h4>
      <div v-for="(room, i) in roomList" :key="i">
        <RoomCards :room="room" />
      </div>
    </div>
    <input type="text" v-model="joinName" />
    <a href="#" @click.prevent="joinRoom">Join Room</a>
  </div>
</template>

<script>
import RoomCards from '@/components/RoomCards'

export default {
  name: 'LobbyRoom',
  data() {
    return {
      username: null,
      roomName: null,
      roomList: [],
      joinName: null,
      gameStart: false
    }
  },
  components: {
    RoomCards
  },
  methods: {
    createRoom() {
      this.$socket.emit('create-room', {
        name: this.roomName,
        username: localStorage.getItem('username')
      })
      this.$socket.on('fetch-rooms', rooms => {
        this.roomList = rooms
      })
      this.roomName = null
    },
    createUsername() {
      if (localStorage.getItem('username')) {
        alert('Username exist')
      } else {
        this.gameStart = true
        localStorage.setItem('username', this.username)
      }
    }
  },
  mounted() {
    this.$socket.on('fetch-room', rooms => {
      console.log('MASHOOOK GAN')
      this.roomList = rooms
    })
  },
  created() {
    this.$socket.on('fetch-room', rooms => {
      console.log('MASHOOOK GAN')
      this.roomList = rooms
    })
    localStorage.clear()
  }
}
</script>

<style lang="scss" scoped></style>
