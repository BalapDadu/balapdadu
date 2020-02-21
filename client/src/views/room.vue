<template>
  <div class="room">
    <div class="bgroom">
      <h1>SELECT ROOM</h1>
    </div>
    <div class="container">
      <div id="inputRoom">
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only">Room Name</label>
            <input
              type="text"
              class="form-control"
              id="inputPassword2"
              placeholder="Room Name"
              v-model="roomName"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary mb-2"
            @click.prevent="createRoom"
          >
            Create New Room
          </button>
        </form>
      </div>
      <div class="row my-3">
        <div class="col-4" v-for="(room, i) in roomList" :key="i">
          <RoomCards :room="room" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import RoomCards from '@/components/RoomCards'

export default {
  name: 'Room',
  data() {
    return {
      username: null,
      roomName: null,
      roomList: [],
      gameStart: false
    }
  },
  components: {
    RoomCards
  },
  methods: {
    createRoom() {
      const form = {
        name: this.roomName,
        UserId: localStorage.getItem('id')
      }
      axios
        .post(`${this.$store.state.BASE_URL}/rooms`, form)
        .then(({ data }) => {
          this.roomName = null
          console.log(data.RoomId)
          this.$router.push({ name: 'Game', params: { roomId: data.RoomId, userId: localStorage.id } })
          console.log(data)
          this.$socket.emit('create-room')
        })
        .catch(({ response }) => {
          console.log(response)
        })
    }
  },
  mounted() {
    this.$socket.emit('ambil-room')
    this.$socket.on('fetch-room', rooms => {
      console.log('MASHOOOK GAN')
      axios
        .get(`${this.$store.state.BASE_URL}/rooms`)
        .then(({ data }) => {
          this.roomList = data
        })
        .catch(({ response }) => {
          console.log(response)
        })
    })
  },
  created() {
    this.$socket.emit('ambil-room')
    this.$socket.on('fetch-room', rooms => {
      console.log('MASHOOOK GAN')
      axios
        .get(`${this.$store.state.BASE_URL}/rooms`)
        .then(({ data }) => {
          this.roomList = data
        })
        .catch(({ response }) => {
          console.log(response)
        })
    })
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (localStorage.getItem('username')) {
        next()
      } else {
        next('/')
      }
    })
  }
}
</script>

<style>
.room {
  background-image: url('../assets/roombackground.gif');
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.bgroom {
  background-color: black;
  padding: 10px;
}
.title {
  font-family: 'Montserrat';
  text-align: center;
  color: rgb(214, 95, 95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  letter-spacing: 1px;
}
h1 {
  background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
  background-size: cover;
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-size: 120px;
  line-height: 0.75;
  margin: 10px 0;
}
/* styling my button */

.white-mode {
  text-decoration: none;
  padding: 7px 10px;
  background-color: rgb(225, 226, 226);
  border-radius: 3px;
  color: rgb(90, 77, 77);
  transition: 0.35s ease-in-out;
  position: absolute;
  left: 15px;
  bottom: 15px;
  font-family: 'Montserrat';
}

.white-mode:hover {
  background-color: #fff;
  color: rgb(202, 84, 16);
}
</style>
