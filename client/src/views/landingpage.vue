<template>
  <div class="home">
    <div>
      <h1>
        <span>N</span>
        <span>I</span>
        <span>N</span>
        <span>J</span>
        <span>A</span>
        <br />
        <span>R</span>
        <span>U</span>
        <span>N</span>
      </h1>
      <img src="../assets/unnamed.gif" alt="" />
    </div>
    <div class="d-flex justify-content-center">
      <form class="form">
        <div class="form-group mx-sm-3 mb-2">
          <input
            type="text"
            class="form-control transparent-input"
            id="inputPassword2"
            placeholder="Input Nickname"
            v-model="username"
          />
        </div>
        <button class="btn btn-outline-dark mb-2" @click.prevent="createPlayer">
          <span
            ><i
              type="submit"
              class="fa fa-arrows-alt"
              style="font-size:38px;color:red"
            ></i
          ></span>
        </button>
        <a></a>
      </form>
      <img
        class="image-banner"
        src="../assets/Brown-Banner-PNG-Background-Image.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      username: null
    }
  },
  components: {},
  methods: {
    createPlayer() {
      localStorage.setItem('username', this.username)
      setTimeout(() => {
        this.$router.push('/room')
      }, 1000)
    }
  }
}
</script>
<style scoped>
input {
  color: white !important;
}
.home {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: url('../assets/pixel-gif-background-12.gif');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
img {
  margin-top: 15vh;
  margin-bottom: -10vh;
}
.image-banner {
  position: absolute;
  height: 150px;
}
h1 {
  cursor: default;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 1;
  width: 100%;
  height: 100px;
  margin-top: 40px;
  display: block;
  text-align: center;
}

h1 span {
  margin: 10px;
  position: relative;
  font-family: 'Bangers', cursive;
  top: 10px;
  display: inline-block;
  -webkit-animation: bounce 0.3s ease infinite alternate;
  font-size: 80px;
  color: rgb(246, 44, 9);
  text-shadow: 0 1px 0 rgb(3, 3, 3), 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
    0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
    0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
}

h1 span:nth-child(2) {
  -webkit-animation-delay: 0.1s;
}

h1 span:nth-child(3) {
  -webkit-animation-delay: 0.2s;
}

h1 span:nth-child(4) {
  -webkit-animation-delay: 0.3s;
}

h1 span:nth-child(5) {
  -webkit-animation-delay: 0.4s;
}

h1 span:nth-child(6) {
  -webkit-animation-delay: 0.5s;
}

h1 span:nth-child(7) {
  -webkit-animation-delay: 0.6s;
}

h1 span:nth-child(8) {
  -webkit-animation-delay: 0.2s;
}

h1 span:nth-child(9) {
  -webkit-animation-delay: 0.3s;
}

h1 span:nth-child(10) {
  -webkit-animation-delay: 0.4s;
}

h1 span:nth-child(11) {
  -webkit-animation-delay: 0.5s;
}

h1 span:nth-child(12) {
  -webkit-animation-delay: 0.6s;
}

h1 span:nth-child(13) {
  -webkit-animation-delay: 0.7s;
}

h1 span:nth-child(14) {
  -webkit-animation-delay: 0.8s;
}
input.transparent-input {
  background-color: rgba(0, 0, 0, 0) !important;
  border: 2px solid rgb(223, 223, 223);
}
form {
  position: absolute;
  z-index: 6;
  margin-top: 18vh;
}
/* ANIMATION */
@-webkit-keyframes bounce {
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
      0 50px 25px rgba(0, 0, 0, 0.2);
  }
}
</style>
