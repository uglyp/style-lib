<template>
  <div class="box">
    <div class="overlay-navigation">
      <nav role="navigation">
        <ul>
          <li><a href="#" data-content="The beginning">Home</a></li>
          <li><a href="#" data-content="Curious?">About</a></li>
          <li><a href="#" data-content="I got game">Skills</a></li>
          <li><a href="#" data-content="Only the finest">Works</a></li>
          <li><a href="#" data-content="Don't hesitate">Contact</a></li>
        </ul>
      </nav>
    </div>

    <section class="home">
      <div class="open-overlay">
        <span class="bar-top" />
        <span class="bar-middle" />
        <span class="bar-bottom" />
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted() {
    $('.open-overlay').click(function() {
      var overlay_navigation = $('.overlay-navigation')
      var nav_item_1 = $('nav li:nth-of-type(1)')
      var nav_item_2 = $('nav li:nth-of-type(2)')
      var nav_item_3 = $('nav li:nth-of-type(3)')
      var nav_item_4 = $('nav li:nth-of-type(4)')
      var nav_item_5 = $('nav li:nth-of-type(5)')
      var top_bar = $('.bar-top')
      var middle_bar = $('.bar-middle')
      var bottom_bar = $('.bar-bottom')

      overlay_navigation.toggleClass('overlay-active')
      if (overlay_navigation.hasClass('overlay-active')) {
        top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar')
        middle_bar
          .removeClass('animate-out-middle-bar')
          .addClass('animate-middle-bar')
        bottom_bar
          .removeClass('animate-out-bottom-bar')
          .addClass('animate-bottom-bar')
        overlay_navigation
          .removeClass('overlay-slide-up')
          .addClass('overlay-slide-down')
        nav_item_1
          .removeClass('slide-in-nav-item-reverse')
          .addClass('slide-in-nav-item')
        nav_item_2
          .removeClass('slide-in-nav-item-delay-1-reverse')
          .addClass('slide-in-nav-item-delay-1')
        nav_item_3
          .removeClass('slide-in-nav-item-delay-2-reverse')
          .addClass('slide-in-nav-item-delay-2')
        nav_item_4
          .removeClass('slide-in-nav-item-delay-3-reverse')
          .addClass('slide-in-nav-item-delay-3')
        nav_item_5
          .removeClass('slide-in-nav-item-delay-4-reverse')
          .addClass('slide-in-nav-item-delay-4')
      } else {
        top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar')
        middle_bar
          .removeClass('animate-middle-bar')
          .addClass('animate-out-middle-bar')
        bottom_bar
          .removeClass('animate-bottom-bar')
          .addClass('animate-out-bottom-bar')
        overlay_navigation
          .removeClass('overlay-slide-down')
          .addClass('overlay-slide-up')
        nav_item_1
          .removeClass('slide-in-nav-item')
          .addClass('slide-in-nav-item-reverse')
        nav_item_2
          .removeClass('slide-in-nav-item-delay-1')
          .addClass('slide-in-nav-item-delay-1-reverse')
        nav_item_3
          .removeClass('slide-in-nav-item-delay-2')
          .addClass('slide-in-nav-item-delay-2-reverse')
        nav_item_4
          .removeClass('slide-in-nav-item-delay-3')
          .addClass('slide-in-nav-item-delay-3-reverse')
        nav_item_5
          .removeClass('slide-in-nav-item-delay-4')
          .addClass('slide-in-nav-item-delay-4-reverse')
      }
    })
  }
}
</script>

<style scoped>
.box {
  background-color: #fff;
}

.home {
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url(https://images.unsplash.com/photo-1446771326090-d910bfaf00f6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=9216e1a8598a8530ce329b41a8f3725d);
  background-size: cover;
  background-position: center center;
}

/* ====================================
Navigation
==================================== */

.overlay-navigation {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.8);
  transform: translateY(-100%);
}

.overlay-slide-down {
  transition: all 0.4s ease-in-out;
  transform: translateY(0);
}

.overlay-slide-up {
  transition: all 0.8s ease-in-out;
  transform: translateY(-100%);
}

nav,
nav ul {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  flex-basis: 20%;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  transform: translateY(-100%);
}

nav li a {
  position: relative;
  top: 46%;
  color: #fff;
  text-transform: uppercase;
  font-family: "Work sans", sans-serif;
  font-weight: 300;
  letter-spacing: 4px;
  text-decoration: none;
  display: block;
  text-align: center;
  font-size: 0.9rem;
}

nav li a:before {
  content: "";
  width: 70px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 100;
  transform: translateX(-100%);
  opacity: 0;
  transition: all 0.2s linear;
}

nav li a:after {
  content: attr(data-content);
  font-size: 0.7rem;
  transition: all 0.2s linear;
  opacity: 0;
  position: absolute;
  z-index: 100;
  color: #fff;
  display: block;
  margin-right: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  bottom: -50px;
  text-transform: none;
  font-family: "Open sans", serif;
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0;
}

nav li a:hover:before {
  transform: translateX(0);
  opacity: 1;
}

nav li a:hover:after {
  transform: translateY(15px);
  opacity: 1;
}

nav li:nth-of-type(1) {
  background-color: #29363b;
}
nav li:nth-of-type(2) {
  background-color: #ea495f;
}
nav li:nth-of-type(3) {
  background-color: #f4837d;
}
nav li:nth-of-type(4) {
  background-color: #fdcea9;
}
nav li:nth-of-type(5) {
  background-color: #99b998;
}

.slide-in-nav-item {
  animation: slide-in-nav-item 0.4s linear 1 0.2s both;
}

.slide-in-nav-item-delay-1 {
  animation: slide-in-nav-item 0.4s linear 1 0.4s both;
}

.slide-in-nav-item-delay-2 {
  animation: slide-in-nav-item 0.4s linear 1 0.6s both;
}

.slide-in-nav-item-delay-3 {
  animation: slide-in-nav-item 0.4s linear 1 0.8s both;
}

.slide-in-nav-item-delay-4 {
  animation: slide-in-nav-item 0.4s linear 1 1s both;
}

.slide-in-nav-item-reverse {
  animation: slide-in-nav-item-reverse 0.3s linear 1 0.5s both;
}

.slide-in-nav-item-delay-1-reverse {
  animation: slide-in-nav-item-reverse 0.3s linear 1 0.4s both;
}

.slide-in-nav-item-delay-2-reverse {
  animation: slide-in-nav-item-reverse 0.3s linear 1 0.3s both;
}

.slide-in-nav-item-delay-3-reverse {
  animation: slide-in-nav-item-reverse 0.3s linear 1 0.2s both;
}

.slide-in-nav-item-delay-4-reverse {
  animation: slide-in-nav-item-reverse 0.3s linear 1 both;
}

/* ====================================
Burger king
==================================== */

.open-overlay {
  position: absolute;
  right: 5rem;
  top: 3.2rem;
  z-index: 100;
  width: 34px;
  display: block;
  cursor: pointer;
}

.open-overlay span {
  display: block;
  height: 1px;
  background-color: #fff;
  cursor: pointer;
  margin-top: 8px;
}

.animate-top-bar {
  animation: animate-top-bar 0.6s linear 1 both;
}

.animate-bottom-bar {
  animation: animate-bottom-bar 0.6s linear 1 both;
}

.animate-middle-bar {
  animation: animate-middle-bar 0.6s linear 1 both;
}

.animate-out-top-bar {
  animation: animate-out-top-bar 0.6s linear 1 both;
}

.animate-out-bottom-bar {
  animation: animate-out-bottom-bar 0.6s linear 1 both;
}

.animate-out-middle-bar {
  animation: animate-out-middle-bar 0.6s linear 1 both;
}

/* ====================================
Animation keyframes
==================================== */

@keyframes slide-in-nav-item {
  from {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes slide-in-nav-item-reverse {
  from {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  to {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

@keyframes animate-top-bar {
  0% {
    background-color: #fff;
  }
  50% {
    -webkit-transform: translateY(9px);
    transform: translateY(9px);
  }
  80% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    background-color: #fff;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    background-color: #29363b;
  }
}

@keyframes animate-bottom-bar {
  0% {
    background-color: #fff;
  }
  50% {
    -webkit-transform: translateY(-9px);
    transform: translateY(-9px);
  }
  80% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    background-color: #fff;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    background-color: #29363b;
  }
}

@keyframes animate-middle-bar {
  0% {
    background-color: #fff;
  }
  80% {
    background-color: #fff;
  }
  100% {
    background-color: #29363b;
  }
}

@keyframes animate-out-top-bar {
  0% {
    background-color: #29363b;
  }
  50% {
    -webkit-transform: translateY(9px);
    transform: translateY(9px);
  }
  80% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    background-color: #29363b;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    background-color: #fff;
  }
}

@keyframes animate-out-bottom-bar {
  0% {
    background-color: #29363b;
  }
  50% {
    -webkit-transform: translateY(-9px);
    transform: translateY(-9px);
  }
  80% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    background-color: #29363b;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    background-color: #fff;
  }
}

@keyframes animate-out-middle-bar {
  0% {
    background-color: #29363b;
  }
  80% {
    background-color: #29363b;
  }
  100% {
    background-color: #fff;
  }
}
.home a {
  font-family: "Work Sans", sans-serif;
  color: #fff;
  font-weight: 300;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  position: absolute;
  z-index: 10;
  top: 50px;
  left: 50px;
  padding-bottom: 3px;
  border-bottom: 1px solid #fff;
}
@media (max-width: 640px) {
  nav ul li a {
    font-size: 11px;
  }
  nav li a:after {
    font-size: 0.6rem;
  }
  .open-overlay {
    right: 1rem;
  }
  nav li a:before {
    width: 15px;
  }
}
</style>
