<template>
  <div class="box">
    <div class="loader">
      <div class="inner one"></div>
      <div class="inner two"></div>
      <div class="inner three"></div>
    </div>

    <div class="loader-2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="cs-loader">
      <div class="cs-loader-inner">
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
      </div>
    </div>





<div class="loader-wrapper">
	<div class="loader">
    <div class="roller"></div>
    <div class="roller"></div>
  </div>

  <div id="loader2" class="loader">
    <div class="roller"></div>
    <div class="roller"></div>
  </div>

  <div id="loader3" class="loader">
    <div class="roller"></div>
    <div class="roller"></div>
  </div>
</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.box {
  height: 100vh;
  background-image: radial-gradient(
    circle farthest-corner at center,
    #3c4b57 0%,
    #1c262b 100%
  );
}

.loader {
  position: absolute;
  top: calc(40% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
}

.inner {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.inner.one {
  left: 0%;
  top: 0%;
  animation: rotate-one 1s linear infinite;
  border-bottom: 3px solid #efeffa;
}

.inner.two {
  right: 0%;
  top: 0%;
  animation: rotate-two 1s linear infinite;
  border-right: 3px solid #efeffa;
}

.inner.three {
  right: 0%;
  bottom: 0%;
  animation: rotate-three 1s linear infinite;
  border-top: 3px solid #efeffa;
}

@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

$speed: 2.5s;

.loader-2 {
  position: absolute;
  top: 100px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  width: 175px;
  height: 100px;
  span {
    display: block;
    background: #ccc;
    width: 7px;
    height: 10%;
    border-radius: 14px;
    margin-right: 5px;
    float: left;
    margin-top: 25%;
    &:last-child {
      margin-right: 0px;
    }
    &:nth-child(1) {
      animation: load $speed 1.4s infinite linear;
    }
    &:nth-child(2) {
      animation: load $speed 1.2s infinite linear;
    }
    &:nth-child(3) {
      animation: load $speed 1s infinite linear;
    }
    &:nth-child(4) {
      animation: load $speed 0.8s infinite linear;
    }
    &:nth-child(5) {
      animation: load $speed 0.6s infinite linear;
    }
    &:nth-child(6) {
      animation: load $speed 0.4s infinite linear;
    }
    &:nth-child(7) {
      animation: load $speed 0.2s infinite linear;
    }
    &:nth-child(8) {
      animation: load $speed 0s infinite linear;
    }
    &:nth-child(9) {
      animation: load $speed 0.2s infinite linear;
    }
    &:nth-child(10) {
      animation: load $speed 0.4s infinite linear;
    }
    &:nth-child(11) {
      animation: load $speed 0.6s infinite linear;
    }
    &:nth-child(12) {
      animation: load $speed 0.8s infinite linear;
    }
    &:nth-child(13) {
      animation: load $speed 1s infinite linear;
    }
    &:nth-child(14) {
      animation: load $speed 1.2s infinite linear;
    }
    &:nth-child(15) {
      animation: load $speed 1.4s infinite linear;
    }
  }
}

@keyframes load {
  0% {
    background: #ccc;
    margin-top: 25%;
    height: 10%;
  }
  50% {
    background: #444;
    height: 100%;
    margin-top: 0%;
  }
  100% {
    background: #ccc;
    height: 10%;
    margin-top: 25%;
  }
}

.cs-loader {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cs-loader-inner {
  transform: translateY(-50%);
  top: 50%;
  position: absolute;
  width: calc(100% - 200px);
  color: #fff;
  padding: 0 100px;
  text-align: center;
}

.cs-loader-inner label {
  font-size: 20px;
  opacity: 0;
  display: inline-block;
}

@keyframes lol {
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  33% {
    opacity: 1;
    transform: translateX(0px);
  }
  66% {
    opacity: 1;
    transform: translateX(0px);
  }
  100% {
    opacity: 0;
    transform: translateX(300px);
  }
}

@-webkit-keyframes lol {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-300px);
  }
  33% {
    opacity: 1;
    -webkit-transform: translateX(0px);
  }
  66% {
    opacity: 1;
    -webkit-transform: translateX(0px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(300px);
  }
}

.cs-loader-inner label:nth-child(6) {
  -webkit-animation: lol 3s infinite ease-in-out;
  animation: lol 3s infinite ease-in-out;
}

.cs-loader-inner label:nth-child(5) {
  -webkit-animation: lol 3s 100ms infinite ease-in-out;
  animation: lol 3s 100ms infinite ease-in-out;
}

.cs-loader-inner label:nth-child(4) {
  -webkit-animation: lol 3s 200ms infinite ease-in-out;
  animation: lol 3s 200ms infinite ease-in-out;
}

.cs-loader-inner label:nth-child(3) {
  -webkit-animation: lol 3s 300ms infinite ease-in-out;
  animation: lol 3s 300ms infinite ease-in-out;
}

.cs-loader-inner label:nth-child(2) {
  -webkit-animation: lol 3s 400ms infinite ease-in-out;
  animation: lol 3s 400ms infinite ease-in-out;
}

.cs-loader-inner label:nth-child(1) {
  -webkit-animation: lol 3s 500ms infinite ease-in-out;
  animation: lol 3s 500ms infinite ease-in-out;
}
</style>
