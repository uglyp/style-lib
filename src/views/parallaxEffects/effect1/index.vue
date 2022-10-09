<template>
  <div class="body">
    <div class="scroll-animations-example">
      <div class="scrollsection">
        <div class="item -normal">
          <img class="image" src="https://picsum.photos/id/1005/300/400">
        </div>
        <div class="item -big">
          <img class="image" src="https://picsum.photos/id/1019/600/800">
        </div>
        <div class="item -small -horizontal">
          <img class="image" src="https://picsum.photos/id/1027/400/300">
        </div>
        <div class="item -normal">
          <img class="image" src="https://picsum.photos/id/1028/300/400">
        </div>
        <div class="item -normal -horizontal">
          <img class="image" src="https://picsum.photos/id/1041/400/300">
        </div>
        <div class="item -big -horizontal">
          <img class="image" src="https://picsum.photos/id/1042/800/600">
        </div>
        <div class="item -small">
          <img class="image" src="https://picsum.photos/id/1049/300/400">
        </div>
        <div class="item -normal -horizontal">
          <img class="image" src="https://picsum.photos/id/1056/300/400">
        </div>
        <div class="item -small -horizontal">
          <img class="image" src="https://picsum.photos/id/1062/400/300">
        </div>
        <div class="item -big">
          <img class="image" src="https://picsum.photos/id/1068/600/800">
        </div>

        <div class="item -normal -horizontal">
          <img class="image" src="https://picsum.photos/id/1069/400/300">
        </div>
        <div class="item -normal -horizontal">
          <img class="image" src="https://picsum.photos/id/1072/300/400">
        </div>
        <div class="item -small -horizontal">
          <img class="image" src="https://picsum.photos/id/1075/400/300">
        </div>
        <div class="item -big">
          <img class="image" src="https://picsum.photos/id/1081/600/800">
        </div>
        <div class="item -normal -horizontal">
          <img class="image" src="https://picsum.photos/id/111/400/300">
        </div>
        <div class="item -small -horizontal">
          <img class="image" src="https://picsum.photos/id/129/400/300">
        </div>
        <div class="item -big">
          <img
            class="image"
            data-value="false"
            src="https://picsum.photos/id/137/600/800"
          >
        </div>
        <div class="item -normal -horizontal">
          <img class="image" src="https://picsum.photos/id/141/300/400">
        </div>
        <div class="item -small -horizontal">
          <img class="image" src="https://picsum.photos/id/145/400/300">
        </div>
        <div class="item -normal">
          <img class="image" src="https://picsum.photos/id/147/300/400">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class Example {
  constructor(options) {
    this.root = options.root

    this.init()

    setTimeout(this.showImages.bind(this), 1000)
  }

  init() {
    this.scroll = new LocomotiveScroll({
      el: this.root,
      direction: 'horizontal',
      smooth: true,
      lerp: 0.05,
      tablet: {
        smooth: true
      },
      smartphone: {
        smooth: true
      }
    })

    this.images = this.root.querySelectorAll('.image');

    [].forEach.call(this.images, image => {
      image.addEventListener('click', e => {
        console.log(e, 'eeeee')

        image.classList.add('-clicked')
        this.hideImages()
      })
    })
  }

  showImages() {
    [].forEach.call(this.images, image => {
      image.classList.remove('-clicked')
      image.classList.add('-active')
    })
  }

  hideImages() {
    [].forEach.call(this.images, image => {
      image.classList.remove('-active')
    })

    setTimeout(this.showImages.bind(this), 2000)
  }
}

export default {
  mounted() {
    new Example({
      root: document.querySelector('.scroll-animations-example')
    })
  }
}
</script>

<style scoped lang="scss">
.body {
  height: 100%;
  background: #eee;
  overflow: hidden;
}

.scroll-animations-example {
  > .scrollsection {
    padding: 10vh 10vh 10vh 10vmax;
    min-width: 550vh;
  }

  > .scrollsection > .item {
    display: inline-block;
    position: relative;
    margin: 0 -30vh 0 3vh;
  }

  > .scrollsection > .item::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }

  > .scrollsection > .item.-big {
    height: 80vh;
    width: 60vh;
  }

  > .scrollsection > .item.-big.-horizontal {
    height: 60vh;
    width: 80vh;
  }

  > .scrollsection > .item.-normal {
    height: 60vh;
    width: 45vh;
    z-index: 1;
  }

  > .scrollsection > .item.-normal.-horizontal {
    height: 45vh;
    width: 60vh;
  }

  > .scrollsection > .item.-normal:nth-of-type(3n) {
    bottom: 5vh;
  }

  > .scrollsection > .item.-normal:nth-of-type(4n) {
    bottom: -5vh;
  }

  > .scrollsection > .item.-small {
    height: 40vh;
    width: 30vh;
    z-index: 2;
  }

  > .scrollsection > .item.-small.-horizontal {
    height: 30vh;
    width: 40vh;
  }

  > .scrollsection > .item.-small:nth-of-type(3n) {
    bottom: 13vh;
  }

  > .scrollsection > .item.-small:nth-of-type(4n) {
    bottom: -13vh;
  }

  > .scrollsection > .item > .image {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: grayscale(1);
    opacity: 0;
    pointer-events: none;
    transform: translateX(0) translateY(0) scale(1);
    transition: filter 0.3s ease, opacity 1s ease, transform 1s ease;
  }

  > .scrollsection > .item:nth-of-type(4n) > .image {
    transform: translateX(-30vh) translateY(-30vh) scale(0.8);
    transition-delay: 0;
  }

  > .scrollsection > .item:nth-of-type(4n - 1) > .image {
    transform: translateX(30vh) translateY(30vh) scale(0.8);
    transition-delay: 0.05s;
  }

  > .scrollsection > .item:nth-of-type(4n - 2) > .image {
    transform: translateX(-30vh) translateY(30vh) scale(0.8);
    transition-delay: 0.1s;
  }

  > .scrollsection > .item:nth-of-type(4n - 3) > .image {
    transform: translateX(-30vh) translateY(-30vh) scale(0.8);
    transition-delay: 0.15s;
  }

  > .scrollsection > .item > .image.-active {
    transform: translateX(0) translateY(0) scale(1);
    opacity: 0.8;
    pointer-events: auto;
    transition: filter 0.3s ease, opacity 1s ease, transform 1s ease;
  }

  > .scrollsection > .item > .image.-clicked {
    transform: translateX(0) translateY(0) scale(5);
    opacity: 0;
    pointer-events: auto;
    transition: filter 0.3s ease, opacity 1s ease, transform 1s ease;
  }

  > .scrollsection > .item > .image.-active:hover {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: grayscale(0);
    opacity: 1;
    cursor: pointer;
  }
}
</style>
