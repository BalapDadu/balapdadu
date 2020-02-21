<template>
  <div class="room">
    <div class="bgroom">
        <h1>SELECT ROOM</h1>
    </div>
    <div class="container">
    <div class="row my-3">
      <div class="col-4">
        <div class="card text-center" style="width: 18rem;">
         <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a class="btn btn-danger"><span>
                <i class="fas fa-fan"></i>
                  </span> JOIN </a>
         </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card text-center" style="width: 18rem;">
         <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a class="btn btn-danger"><span>
                <i class="fas fa-fan"></i>
                  </span> JOIN </a>         </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card text-center" style="width: 18rem;">
         <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a class="btn btn-danger"><span>
                <i class="fas fa-fan"></i>
                  </span> JOIN </a>
         </div>
        </div>
      </div>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'room'
}
</script>

<style>
    .room{
      background-image: url('../assets/roombackground.gif');
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .bgroom{
      background-color: black;
      padding: 10px
    }
    .card{
      color: black;
      background-color: antiquewhite;
      border-radius: 10px;
    }
.title {
  font-family: "Montserrat";
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
  line-height: .75;
  margin: 10px 0;
}
/* styling my button */

.white-mode {
  text-decoration: none;
  padding: 7px 10px;
  background-color: rgb(225, 226, 226);
  border-radius: 3px;
  color: rgb(90, 77, 77);
  transition: .35s ease-in-out;
  position: absolute;
  left: 15px;
  bottom: 15px;
  font-family: "Montserrat";
}

.white-mode:hover {
background-color: #FFF;
color: rgb(202, 84, 16);
}

</style>
