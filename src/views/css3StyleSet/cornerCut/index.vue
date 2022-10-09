<template>
  <div class="box">
    <h3>CSS </h3>
    <div class="shape" />
    <div class="shape semi-transparent" />
    <div class="shape-image">
      <div class="before">
        <div class="img" />
      </div>
    </div>
    <h3>SVG </h3>
    <div class="vector">
      <svg viewBox="0 0 400 150" preserveAspectRatio="none">
        <defs>
          <path id="p" d="M50,2 h 342 v144 h-390 v-90 a6,12 0 0,1 3,-9 z" />
          <clipPath id="clipper">
            <use xlink:href="#p" />
          </clipPath>
          <pattern
            id="bg"
            width="400"
            height="150"
            patternUnits="userSpaceOnUse"
          />
        </defs>
        <polygon points="2,2 392,2 392,148 2,148" clip-path="url(#clipper)" />
        <use xlink:href="#p" />
      </svg>
    </div>
    <h3>Image</h3>
    <img src="http://lorempixel.com/400/150">
    <h3>Other</h3>
    <div class="btn">
      <defs>
        <clipPath id="button-svg" viewbox="0 0 100 50">
          <path style="fill: none;" d="M15 0L0 15v35h85l15-15V0z" />
        </clipPath>
      </defs>
      <div class="btn-text">
        MARVEL
      </div>
      <svg viewbox="0 0 100 50">
        <path class="btn-path" d="M15 0L0 15v35h85l15-15V0z" />
      </svg>
      <div class="bg" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {}
}
</script>

<style lang="scss" scoped>
.btn-path{
  stroke-width: 0.5px;
  stroke: black;
  fill: transparent;
  transition: fill 1s;
}

.btn-text{
  position:absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  font-family: bebas;
  font-size: 2em;
}

.btn{
  position: relative;
  width: 200px;
}

.btn:hover > .btn-path{
  background-color: red;
  animation: redfill 1s ease;
}

.bg{
  clip-path: url(#button-svg);
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
}

.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.shape,
.shape-image {
  position: relative;
  height: 150px;
  width: 400px;
  border-bottom: 1px solid crimson;
  overflow: hidden;
}
.shape:before,
.shape:after,
.shape-image:after {
  position: absolute;
  content: "";
  top: 0px;
  height: 100%;
  z-index: -1;
}
.shape:before,
.shape-image .before {
  left: 0px;
  top: -1px;
  width: 50px;
  border: 1px solid crimson;
  border-width: 2px 0px 0px 1px;
  border-top-left-radius: 8px;
  transform-origin: right bottom;
  transform: skewY(-45deg);
}
.shape:after,
.shape-image:after {
  left: 51px;
  width: calc(100% - 52px);
  border: 1px solid crimson;
  border-left: none;
}

.shape:after,
.shape:before {
  background: aliceblue;
}
.shape.semi-transparent:after,
.shape.semi-transparent:before {
  background: rgba(150, 150, 150, 0.5);
}
.shape-image .before {
  position: absolute;
  top: 0px;
  height: 100%;
  overflow: hidden;
}
.shape-image .before .img {
  height: 100%;
  width: 100%;
  border-top-left-radius: 8px;
  background: url(http://lorempixel.com/400/150);
  transform-origin: right bottom;
  transform: skewY(45deg);
}
.shape-image:after {
  background: url(http://lorempixel.com/400/150);
  background-position: -50px 0px;
}

.vector {
  height: 150px;
  width: 410px;
  // padding-left
}
svg {
  height: 100%;
  width: 100%;
}

path {
  stroke: crimson;
  fill: none;
}

polygon {
  fill: url(#bg);
}
/* Just for demo */

body {
  background-image: radial-gradient(circle, #3f9cba 0%, #153346 100%);
}
.shape {
  margin: 10px;
}
</style>
