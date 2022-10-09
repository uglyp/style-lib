<template>
  <div class="div">
    <!--
  Please note: this code is in no way ready to be used as is in production on your website. It will need to be adapted to be cross browser compliant & accessible. I just wanted to share how one might go about this effect with CSS & JS and no other dependencies
-->
    <div class="container">
      <div class="card-column column-0">
        <div class="card card-color-0">
          <div class="border" />
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg"
          >
          <h1>Hey now, you're an allstar</h1>
        </div>
        <div class="card card-color-2">
          <div class="border" />
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg"
          >
          <h1>Hey now, you're a rock star</h1>
        </div>
      </div>
      <div class="card-column column-1">
        <div class="card card-color-1">
          <div class="border" />
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg"
          >
          <h1>Get your game on, go play</h1>
        </div>
        <div class="card card-color-3">
          <div class="border" />
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg"
          >
          <h1>Get the show on, get paid</h1>
        </div>
      </div>
    </div>

    <div id="cover" class="cover" />

    <div id="open-content" class="open-content">
      <a
        id="close-content"
        href="#"
        class="close-content"
      ><span class="x-1" /><span class="x-2" /></a>
      <img id="open-content-image" src="">
      <div id="open-content-text" class="text" />
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    var cards
    var nCards
    var cover
    var openContent
    var openContentText
    var pageIsOpen = false
    var openContentImage
    var closeContent
    var windowWidth
    var windowHeight
    var currentCard

    init()

    function init() {
      resize()
      selectElements()
      attachListeners()
    }

    function selectElements() {
      (cards = document.getElementsByClassName('card')),
      (nCards = cards.length),
      (cover = document.getElementById('cover')),
      (openContent = document.getElementById('open-content')),
      (openContentText = document.getElementById('open-content-text')),
      (openContentImage = document.getElementById('open-content-image'))
      closeContent = document.getElementById('close-content')
    }

    /* Attaching three event listeners here:
  - a click event listener for each card
  - a click event listener to the close button
  - a resize event listener on the window
*/
    function attachListeners() {
      for (var i = 0; i < nCards; i++) {
        attachListenerToCard(i)
      }
      closeContent.addEventListener('click', onCloseClick)
      window.addEventListener('resize', resize)
    }

    function attachListenerToCard(i) {
      cards[i].addEventListener('click', function(e) {
        var card = getCardElement(e.target)
        onCardClick(card, i)
      })
    }

    function onCardClick(card, i) {
      currentCard = card
      currentCard.className += ' clicked'
      setTimeout(function() {
        animateCoverUp(currentCard)
      }, 500)
      animateOtherCards(currentCard, true)
      openContent.className += ' open'
    }
    function animateCoverUp(card) {
      var cardPosition = card.getBoundingClientRect()
      var cardStyle = getComputedStyle(card)
      setCoverPosition(cardPosition)
      setCoverColor(cardStyle)
      scaleCoverToFillWindow(cardPosition)
      openContentText.innerHTML =
        '<h1>' + card.children[2].textContent + '</h1>' + paragraphText
      openContentImage.src = card.children[1].src
      setTimeout(function() {
        window.scroll(0, 0)
        pageIsOpen = true
      }, 300)
    }

    function animateCoverBack(card) {
      var cardPosition = card.getBoundingClientRect()
      // 由于滚动的原因，原卡片可能处于不同的位置，因此在缩小前需要重置封面位置
      setCoverPosition(cardPosition)
      scaleCoverToFillWindow(cardPosition)
      // 动画缩放回卡片的大小和位置
      cover.style.transform =
        'scaleX(' +
        1 +
        ') scaleY(' +
        1 +
        ') translate3d(' +
        0 +
        'px, ' +
        0 +
        'px, 0px)'
      setTimeout(function() {
        openContentText.innerHTML = ''
        openContentImage.src = ''
        cover.style.width = '0px'
        cover.style.height = '0px'
        pageIsOpen = false
        currentCard.className = currentCard.className.replace(' clicked', '')
      }, 301)
    }

    function setCoverPosition(cardPosition) {
      cover.style.left = cardPosition.left + 'px'
      cover.style.top = cardPosition.top + 'px'
      cover.style.width = cardPosition.width + 'px'
      cover.style.height = cardPosition.height + 'px'
    }

    function setCoverColor(cardStyle) {
      cover.style.backgroundColor = cardStyle.backgroundColor
    }

    function scaleCoverToFillWindow(cardPosition) {
      var scaleX = windowWidth / cardPosition.width
      var scaleY = windowHeight / cardPosition.height
      var offsetX =
        (windowWidth / 2 - cardPosition.width / 2 - cardPosition.left) / scaleX
      var offsetY =
        (windowHeight / 2 - cardPosition.height / 2 - cardPosition.top) /
        scaleY
      cover.style.transform =
        'scaleX(' +
        scaleX +
        ') scaleY(' +
        scaleY +
        ') translate3d(' +
        offsetX +
        'px, ' +
        offsetY +
        'px, 0px)'
    }

    function onCloseClick() {
      openContent.className = openContent.className.replace(' open', '')
      animateCoverBack(currentCard)
      animateOtherCards(currentCard, false)
    }

    function animateOtherCards(card, out) {
      var delay = 100
      for (var i = 0; i < nCards; i++) {
        if (cards[i] === card) continue
        if (out) animateOutCard(cards[i], delay)
        else animateInCard(cards[i], delay)
        delay += 100
      }
    }

    function animateOutCard(card, delay) {
      setTimeout(function() {
        card.className += ' out'
      }, delay)
    }

    function animateInCard(card, delay) {
      setTimeout(function() {
        card.className = card.className.replace(' out', '')
      }, delay)
    }

    function getCardElement(el) {
      if (el.className.indexOf('card ') > -1) return el
      else return getCardElement(el.parentElement)
    }

    function resize() {
      if (pageIsOpen) {
        var cardPosition = currentCard.getBoundingClientRect()
        setCoverPosition(cardPosition)
        scaleCoverToFillWindow(cardPosition)
      }
      windowWidth = window.innerWidth
      windowHeight = window.innerHeight
    }

    var paragraphText =
      "<p>Somebody once told me the world is gonna roll me. I ain't the sharpest tool in the shed. She was looking kind of dumb with her finger and her thumb in the shape of an \"L\" on her forehead. Well the years start coming and they don't stop coming. Fed to the rules and I hit the ground running. Didn't make sense not to live for fun. Your brain gets smart but your head gets dumb. So much to do, so much to see. So what's wrong with taking the back streets? You'll never know if you don't go. You'll never shine if you don't glow.</p><p>Hey now, you're an all-star, get your game on, go play. Hey now, you're a rock star, get the show on, get paid. And all that glitters is gold. Only shooting stars break the mold.</p><p>It's a cool place and they say it gets colder. You're bundled up now, wait till you get older. But the meteor men beg to differ. Judging by the hole in the satellite picture. The ice we skate is getting pretty thin. The water's getting warm so you might as well swim. My world's on fire, how about yours? That's the way I like it and I never get bored.</p>"
  }
}
</script>

<style lang="scss" scoped>
.div {
  background: #150f21;
  font-size: 18px;
}

p {
  line-height: 1.5;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

/* Cards */
.card-column {
  width: 50%;
  float: left;
  padding: 4%;
  box-sizing: border-box;
}

.column-1 {
  padding-top: 100px;
}

.card {
  width: 92%;
  max-width: 340px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background: #eb5160;
  color: #fff;
  cursor: pointer;
  margin-bottom: 60px;
}

.border {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 6px;
  border: 1px solid #fff;
  opacity: 0.5;
  left: -6px;
  top: -6px;
}

.card h1 {
  position: relative;
  padding: 190px 0px 100px 10px;
  width: 90%;
}

.card > img {
  width: 90%;
  position: absolute;
  top: -6%;
  left: -6%;
}

.card-color-0 {
  background-color: #eb5160;
}

.card-color-1 {
  background-color: #8f3985;
}

.card-color-2 {
  background-color: #8daa91;
}

.card-color-3 {
  background-color: #888da7;
}

/* The cover (expanding background) */
.cover {
  position: fixed;
  background: #eb5160;
  z-index: 100;
  transform-origin: 50% 50%;
}

/* The open page content */
.open-content {
  width: 100%;
  z-index: 110;
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.open-content img {
  position: relative;
  width: 90%;
  margin-left: 3%;
  margin-top: 20px;
  z-index: 5;
}

.open-content .text {
  background: #fff;
  margin-top: -56%;
  padding: 60% 5% 5% 5%;
  width: 80%;
  margin-left: 5%;
  margin-bottom: 5%;
}

.open-content .text h1,
.open-content .text p {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.close-content {
  display: block;
  position: absolute;
  right: 12px;
  top: 12px;
  width: 30px;
  height: 30px;
}

.close-content span {
  background: #222;
  width: 30px;
  height: 6px;
  display: block;
  position: absolute;
  top: 14px;
}

.x-1 {
  transform: rotate(45deg);
}

.x-2 {
  transform: rotate(-45deg);
}

/*
** Transitions
*/

.card {
  transition: opacity 200ms linear 320ms, transform 200ms ease-out 320ms;
}

.border {
  transition: opacity 200ms linear, transform 200ms ease-out;
}

.card img {
  transition: opacity 200ms linear 0ms, transform 200ms ease-in 0ms;
}

.card h1 {
  transform: translate3d(20%, 0px, 0px);
  transition: opacity 200ms linear 120ms, transform 200ms ease-in 120ms;
}

/* Clicked card */
.card.clicked img {
  transform: translate3d(0px, -40px, 0px);
  opacity: 0;
}

.card.clicked .border {
  opacity: 0;
  transform: scale(1.3);
}

.card.out,
.card.out img {
  transform: translate3d(0px, -40px, 0px);
  opacity: 0;
}

.card.out h1,
.card.clicked h1 {
  transform: translate3d(20%, -40px, 0px);
  opacity: 0;
}

.cover {
  transition: transform 300ms ease-in-out;
}

.open-content {
  transition: opacity 200ms linear 0ms;
}

.open-content.open {
  opacity: 1;
  pointer-events: all;
  transition-delay: 1000ms;
}

/*
** Media Queries
*/

@media screen and (max-width: 600px) {
  .card-column {
    width: 90%;
  }

  .column-1 {
    padding-top: 0px;
  }

  .open-content img {
    margin-top: 40px;
  }
}
</style>
