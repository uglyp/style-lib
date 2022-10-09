<template>
  <div class="box">
    <h1>CSS 2D和3D加载器集合</h1>

    <h2>向上翻转</h2>

    <div class="loader loader--flipDelay loader--3d">
      <span class="loader-item">1</span>
      <span class="loader-item">2</span>
      <span class="loader-item">3</span>
      <span class="loader-item">4</span>
      <span class="loader-item">5</span>
      <span class="loader-item">6</span>
    </div>

    <h2>向下翻转</h2>

    <div class="loader loader--flipDelayDown loader--3d">
      <span class="loader-item">1</span>
      <span class="loader-item">2</span>
      <span class="loader-item">3</span>
      <span class="loader-item">4</span>
      <span class="loader-item">5</span>
      <span class="loader-item">6</span>
    </div>

    <h2>2D翻转</h2>

    <div class="loader loader--slowFlip">
      <span class="loader-item">1</span>
      <span class="loader-item">2</span>
      <span class="loader-item">3</span>
      <span class="loader-item">4</span>
      <span class="loader-item">5</span>
      <span class="loader-item">6</span>
    </div>

    <h2>3D纵向翻转</h2>

    <div class="loader loader--slowFlip loader--3d">
      <span class="loader-item">1</span>
      <span class="loader-item">2</span>
      <span class="loader-item">3</span>
      <span class="loader-item">4</span>
      <span class="loader-item">5</span>
      <span class="loader-item">6</span>
    </div>

    <h2>3D横向翻转</h2>

    <div class="loader loader--flipHoz loader--3d">
      <span class="loader-item">1</span>
      <span class="loader-item">2</span>
      <span class="loader-item">3</span>
      <span class="loader-item">4</span>
      <span class="loader-item">5</span>
      <span class="loader-item">6</span>
    </div>

    <h2>横向渐变</h2>

    <div class="loader loader--fade">
      <span class="loader-item">1</span>
      <span class="loader-item">2</span>
      <span class="loader-item">3</span>
      <span class="loader-item">4</span>
      <span class="loader-item">5</span>
      <span class="loader-item">6</span>
    </div>

    <h2>下摆</h2>

    <div class="loader loader--slideDown">
      <span class="loader-item">1</span>
      <span class="loader-item">2</span>
      <span class="loader-item">3</span>
      <span class="loader-item">4</span>
      <span class="loader-item">5</span>
      <span class="loader-item">6</span>
    </div>

    <h2>上摆</h2>

    <div class="loader loader--slideUp">
      <span class="loader-item">1</span>
      <span class="loader-item">2</span>
      <span class="loader-item">3</span>
      <span class="loader-item">4</span>
      <span class="loader-item">5</span>
      <span class="loader-item">6</span>
    </div>

    <h2>上下摆</h2>

    <div class="loader loader--slideBoth">
      <span class="loader-item">1</span>
      <span class="loader-item">2</span>
      <span class="loader-item">3</span>
      <span class="loader-item">4</span>
      <span class="loader-item">5</span>
      <span class="loader-item">6</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
$itemSize: 50;
$itemSpacing: 2;
$squareSize: 40;
$loaderColor: rgba(61, 92, 126, 0.7);
$loaderDelay: 100;
$loaderDuration: 2000;
$animationTiming: cubic-bezier(0.645, 0.045, 0.355, 1);

.box {
  font-family: "PT Sans", sans-serif;
  text-align: center;
  background-color: #000;
  padding-top: 40px;
  padding-bottom:100px
}

h1,
h2 {
  background-color: rgba(200, 200, 200, 0.2);
  padding: 20px;
  text-transform: uppercase;
  color: #fff;
}
h1 {
  font-size: 24px;
  margin-bottom: 40px;

  a {
    display: block;
    margin-top: 10px;
    text-transform: none;
    color: #aaa;
    font-size: 16px;
    text-decoration: none;
  }
}
h2 {
  font-size: 16px;
  margin-bottom: 15%;
}

.loader {
  display: block;
  overflow: hidden;
  margin-bottom: 15%;
  font-size: 0;
}
.loader--3d {
  transform-style: preserve-3d;
  perspective: 800px;
}
.loader--slideBoth {
  overflow: visible;
}

.loader-item {
  display: inline-block;
  width: $itemSize + px;
  height: $itemSize + px;
  margin-left: $itemSpacing + px;
  background-color: $loaderColor;
  color: $loaderColor;

  animation-duration: $loaderDuration + ms;
  animation-timing-function: $animationTiming;
  animation-iteration-count: infinite;

  //通过循环添加动画延迟
  @for $i from 1 through 6 {
    &:nth-child(#{$i}) {
      animation-delay: ($i * $loaderDelay) + ms;
    }
  }

  //添加slowFlip到第一个
  .loader--slowFlip & {
    animation-name: slowFlip;
  }
  .loader--flipHoz & {
    animation-name: flipHoz;
  }
  .loader--fade & {
    animation-name: fade;
    animation-duration: ($loaderDuration/2) + ms;
  }
  .loader--slowFlip &,
  .loader--flipHoz & {
    @for $i from 1 through 6 {
      &:nth-child(#{$i}) {
        animation-delay: ($i * $loaderDelay * 1.5) + ms;
      }
    }
  }

  .loader--flipDelay & {
    animation-name: flipDelay;
  }
  .loader--flipDelayDown & {
    animation-name: flipDelay;
    animation-direction: reverse;
  }

  .loader--slideDown &,
  .loader--slideUp & {
    animation-name: slideDown;
    animation-duration: ($loaderDuration/2.5) + ms;
    animation-timing-function: linear;
  }

  .loader--slideDown & {
    transform-origin: top left;
  }
  .loader--slideUp & {
    transform-origin: bottom left;
  }
  .loader--slideBoth & {
    animation-name: slideBoth;
    animation-duration: ($loaderDuration/2) + ms;
    transform-origin: bottom left;
    animation-timing-function: linear;
  }
}

/***********************************/
/********* 关键帧动画的定义 ********/
/**********************************/

@keyframes slowFlip {
  0% {
    transform: rotateX(0deg);
  }
  40% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(180deg);
  }
}

@keyframes flipHoz {
  0% {
    transform: rotateY(0deg);
  }
  40% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(180deg);
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes flipDelay {
  0% {
    transform: rotateX(0deg);
    transform-origin: 0 0 0;
    opacity: 1;
  }
  30% {
    transform: rotateX(90deg);
    transform-origin: 0 0 0;
    opacity: 0;
  }
  40% {
    transform-origin: 0 0 0;
  }
  60% {
    transform: rotateX(90deg);
    opacity: 0;
    transform-origin: 0 100% 0;
  }
  90% {
    transform: rotateX(0deg);
    opacity: 1;
    transform-origin: 0 100% 0;
  }
}

@keyframes slideDown {
  0% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(90deg);
  }
}
@keyframes slideBoth {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}
</style>
