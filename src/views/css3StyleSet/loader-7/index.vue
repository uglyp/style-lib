<template>
  <div class="box">
    <div class="loader">
      <svg viewBox="0 0 80 80">
        <circle id="test" cx="40" cy="40" r="32"></circle>
      </svg>
    </div>

    <div class="loader triangle">
      <svg viewBox="0 0 86 80">
        <polygon points="43 8 79 72 7 72"></polygon>
      </svg>
    </div>

    <div class="loader">
      <svg viewBox="0 0 80 80">
        <rect x="8" y="8" width="64" height="64"></rect>
      </svg>
    </div>
    <div class="block">
      <h1>OuroboroCSS</h1>

      <p class="circle">
        <span class="ouro">
          <span class="left"><span class="anim"></span></span>
          <span class="right"><span class="anim"></span></span>
        </span>

        <span class="ouro ouro2">
          <span class="left"><span class="anim"></span></span>
          <span class="right"><span class="anim"></span></span>
        </span>

        <span class="ouro ouro3">
          <span class="left"><span class="anim"></span></span>
          <span class="right"><span class="anim"></span></span>
        </span>
      </p>

      <p class="round">
        <span class="ouro">
          <span class="left"><span class="anim"></span></span>
          <span class="right"><span class="anim"></span></span>
        </span>

        <span class="ouro ouro2">
          <span class="left"><span class="anim"></span></span>
          <span class="right"><span class="anim"></span></span>
        </span>

        <span class="ouro ouro3">
          <span class="left"><span class="anim"></span></span>
          <span class="right"><span class="anim"></span></span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.loader {
  --path: #2f3545;
  --dot: #5628ee;
  --duration: 3s;
  width: 44px;
  height: 44px;
  position: relative;
  &:before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    display: block;
    background: var(--dot);
    top: 37px;
    left: 19px;
    transform: translate(-18px, -18px);
    animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
      infinite;
  }
  svg {
    display: block;
    width: 100%;
    height: 100%;
    rect,
    polygon,
    circle {
      fill: none;
      stroke: var(--path);
      stroke-width: 10px;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
    polygon {
      stroke-dasharray: 145 (221 - 145) 145 (221 - 145);
      stroke-dashoffset: 0;
      animation: pathTriangle var(--duration)
        cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
    }
    rect {
      stroke-dasharray: (256 / 4 * 3) (256 / 4) (256 / 4 * 3) (256 / 4);
      stroke-dashoffset: 0;
      animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
    }
    circle {
      stroke-dasharray: (200 / 4 * 3) (200 / 4) (200 / 4 * 3) (200 / 4);
      stroke-dashoffset: 75;
      animation: pathCircle var(--duration)
        cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
    }
  }
  &.triangle {
    width: 48px;
    &:before {
      left: 21px;
      transform: translate(-10px, -18px);
      animation: dotTriangle var(--duration)
        cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
    }
  }
}

@keyframes pathTriangle {
  33% {
    stroke-dashoffset: 74;
  }
  66% {
    stroke-dashoffset: 147;
  }
  100% {
    stroke-dashoffset: 221;
  }
}

@keyframes dotTriangle {
  33% {
    transform: translate(0, 0);
  }
  66% {
    transform: translate(10px, -18px);
  }
  100% {
    transform: translate(-10px, -18px);
  }
}

@keyframes pathRect {
  25% {
    stroke-dashoffset: 64;
  }
  50% {
    stroke-dashoffset: 128;
  }
  75% {
    stroke-dashoffset: 192;
  }
  100% {
    stroke-dashoffset: 256;
  }
}

@keyframes dotRect {
  25% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(18px, -18px);
  }
  75% {
    transform: translate(0, -36px);
  }
  100% {
    transform: translate(-18px, -18px);
  }
}

@keyframes pathCircle {
  25% {
    stroke-dashoffset: 125;
  }
  50% {
    stroke-dashoffset: 175;
  }
  75% {
    stroke-dashoffset: 225;
  }
  100% {
    stroke-dashoffset: 275;
  }
}

.loader {
  display: inline-block;
  margin: 0 16px;
}

html {
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: border-box;
  &:before,
  &:after {
    box-sizing: border-box;
  }
}

// Center & dribbble
.box {
  min-height: 100vh;
  background: #f5f9ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .dribbble {
    position: fixed;
    display: block;
    right: 20px;
    bottom: 20px;
    img {
      display: block;
      height: 28px;
    }
  }
}

/****** OuroboroCSS *******/

/* Inspirated from  http://www.alessioatzeni.com/wp-content/tutorials/html-css/CSS3-loading-animation-loop/index.html */
.ouro {
  position: relative;
  display: inline-block;
  height: 46px;
  width: 46px;
  margin: 1em;
  border-radius: 50%;
  background: none repeat scroll 0 0 #dddddd;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) inset, 0 0 25px rgba(0, 0, 255, 0.075);
}

.ouro:after {
  content: "";
  position: absolute;
  top: 9px;
  left: 9px;
  display: block;
  height: 28px;
  width: 28px;
  background: none repeat scroll 0 0 #f2f2f2;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.ouro > span {
  position: absolute;
  height: 100%;
  width: 50%;
  overflow: hidden;
}
.left {
  left: 0;
}
.right {
  left: 50%;
}

.anim {
  position: absolute;
  left: 100%;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 999px;
  background: none repeat scroll 0 0 #508ec3;
  opacity: 0.8;
  -webkit-animation: ui-spinner-rotate-left 3s infinite;
  animation: ui-spinner-rotate-left 3s infinite;
  -webkit-transform-origin: 0 50% 0;
  transform-origin: 0 50% 0;
}
.left .anim {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.right .anim {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  left: -100%;
  -webkit-transform-origin: 100% 50% 0;
  transform-origin: 100% 50% 0;
}

/* v2 */
.ouro2 .anim {
  -webkit-animation-delay: 0;
  animation-delay: 0;
}
.ouro2 .right .anim {
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
}

/* v3 */
.ouro3 .anim {
  -webkit-animation-delay: 0s;
  -webkit-animation-duration: 3s;
  -webkit-animation-timing-function: linear;
  animation-delay: 0s;
  animation-duration: 3s;
  animation-timing-function: linear;
}
.ouro3 .right .anim {
  -webkit-animation-name: ui-spinner-rotate-right;
  -webkit-animation-delay: 0;
  -webkit-animation-delay: 1.5s;
  animation-name: ui-spinner-rotate-right;
  animation-delay: 0;
  animation-delay: 1.5s;
}

/* round variation */
.round .ouro:after {
  display: none;
}

/* double variation */
.double .ouro:after {
  height: 13px;
  width: 13px;
  left: 7px;
  top: 7px;
  border: 10px solid #ddd;
  background: transparent;
  box-shadow: none;
}

@keyframes ui-spinner-rotate-right {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes ui-spinner-rotate-left {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes ui-spinner-rotate-right {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(180deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes ui-spinner-rotate-left {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

/*
 * Some bugs with Chrome (Android), Safari and Opera, I'll try to see how http://atomeye.com/projects/sass-css-spinner.html made his code.
 */

/* presentation styles */
html {
  height: 100%;
}
body {
  text-align: center;
  background: radial-gradient(circle, #fff 0%, #bbb 85%) no-repeat;
  background: -webkit-radial-gradient(circle, #fff 0%, #bbb 85%) no-repeat;
  height: 100%;
  display: table;
  width: 100%;
}
.block {
  display: table-cell;
  vertical-align: middle;
}
h1,
a {
  margin-top: 1em;
  font-family: "Open Sans Light", "Open Sans", "Segoe UI", Helvetica, Arial;
  color: #888;
  font-weight: lighter;
}
.info {
  margin-top: 25px;
}
.info a {
  font-size: 12px;
  color: #999;
}
.info br + a {
  text-decoration: none;
}
</style>
