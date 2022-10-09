<template>
  <div class="swiper-box">
    <div :class="['bg', bg]">
      <header>
        <nav>
          <ul>
            <li>
              <a class="link-bio" @click="bg = 'bio'">Bio</a>
            </li>
            <li>
              <a class="link-projects" @click="bg = 'projects'">Projects</a>
            </li>
            <li>
              <a class="link-find-me" @click="bg = 'find-me'">Find Me</a>
            </li>
          </ul>
        </nav>
        <div class="transition transition-bio" />
        <div class="transition transition-projects" />
        <div class="transition transition-find-me" />
        <h1>Header</h1>
      </header>
      <div class="dots dots1" />
      <div class="dots dots2" />
      <main>
        <transition name="slide-fade" mode="out-in">
          <p v-if="bg === 'bio'" key="bio">Hi! I'm a bio page.</p>
          <p v-if="bg === 'projects'" key="projects">
            This is a projects page.
          </p>
          <p v-if="bg === 'find-me'" key="find-me">
            See
            <a
              href="https://pehaa.com"
              target="_blank"
              rel="noopener"
            >pehaa.com</a>
            for the complete website (built with Nuxt.js).
          </p>
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bg: 'bio'
    }
  }
}
</script>

<style scoped>
.swiper-box {
  position: relative;
  width: 100%;
  height: 100%;
}

a {
  color: inherit;
}

.bg {
  background: inherit;
  /* min-height: 100vh; */
  /* padding: 25vh 0 1.5rem; */
  transition: background 0s 1s, color 0.6s;
}

.projects {
  color: var(--purple-brown);
}

.bg:after {
  content: "";
  border: var(--border-width) solid;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 12;
  pointer-events: none;
  transition: 1s;
}

.bio,
.link-bio {
  background: var(--purple-brown);
}

.bio h1 {
  background-color: var(--dark-peach);
}

.projects,
.link-projects {
  background: var(--egg-shell);
}

.find-me,
.link-find-me {
  background: var(--dark-peach);
}

.transition {
  width: 1rem;
  height: 1rem;
  top: 0;
  display: block;
  position: absolute;
  opacity: 0;
  transition: transform 0.6s ease-in-out;
  width: 100%;
  height: 100vh;
  transform: scale(0.1);
  transform-origin: 0 0;
}

.transition-bio {
  left: 0;
  background: var(--purple-brown);
}

.transition-projects {
  left: 7.5rem;
  background: var(--egg-shell);
}

.transition-find-me {
  left: 15rem;
  background: var(--dark-peach);
}

.bio .transition-bio,
.projects .transition-projects,
.find-me .transition-find-me {
  opacity: 1;
}

.bio .transition-bio {
  transform: scale(1);
}

.projects .transition-projects {
  transform: scale(1) translateX(-7.5rem);
}

.find-me .transition-find-me {
  transform: scale(1) translateX(-15rem);
}

.dots:before,
.dots:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  opacity: 0.5;
  z-index: 11;
  background-image: linear-gradient(var(--dark-peach) 20%, transparent 0);
  background-size: 100% var(--dots-gap);
  background-position: 0 0;
  animation: movebg 0.2s linear infinite;
  will-change: transform;
  width: 2px;
}

.dots1:before {
  left: 5%;
}

.dots1:after {
  left: 15%;
}

.dots2:before {
  right: 75%;
}

.dots2:after {
  right: 5%;
}

.dots:after {
  animation-direction: reverse;
}

.projects .dots:before,
.projects .dots:after {
  background-image: linear-gradient(var(--purple-brown) 20%, transparent 0);
}

.find-me .dots:before,
.find-me .dots:after {
  background-image: linear-gradient(var(--egg-shell) 20%, transparent 0);
}

@keyframes movebg {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, var(--dots-gap), 0);
  }
}
h1 {
  font-family: "Anton", sans-serif;
  text-align: center;
  margin: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #000),
    color-stop(0.5, #000),
    color-stop(1, transparent)
  );
  transition: background-position 1s, background-color 1s;
  text-align: center;
  font-size: calc(28vw + 1rem);
  font-weight: 400;
  line-height: 1;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/tw-o.png"),
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/tw6-o.png"),
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/tw5-o.png");
  background-size: 45vw auto, 45vw auto, 30vw auto;
  background-repeat: repeat-x;
  background-position: 0px 15%, 200px 25%, -50px 2vw;
}

.projects h1 {
  background-color: var(--dark-peach);
  background-position: -120px 15%, 230px 20%, -100px 3vw;
}

.find-me h1 {
  background-color: var(--egg-shell);
  background-position: -240px 15%, 260px 25%, -150px 1vw;
}

nav {
  position: absolute !important;
  top: var(--border-width);
  left: var(--border-width);
  z-index: 10;
}
nav ul {
  list-style: none;
  display: flex;
  text-align: center;
  margin: 0;
  padding: 0;
}
nav li {
  flex: 1 0 7.5rem;
}
nav a {
  display: block;
  padding: 0.75rem 0 0.5rem;
  color: var(--egg-shell);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.875rem;
}
nav .link-projects {
  color: var(--purple-brown);
}

main {
  position: relative;
  max-width: 36rem;
  padding: 0 1.5rem;
  margin: -3rem auto 0;
  font-size: 2rem;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(2rem);
  opacity: 0;
}

.controls-button,
.slide-side-text,
.slide-content-cta {
  font-family: "Montserrat";
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 0.12rem;
  font-size: 0.7rem;
  line-height: 1;
}

[v-cloak] {
  opacity: 0;
}

.wrapper {
  height: calc(100vh - 50px);
  min-height: 36rem;
  position: relative;
}
@media (max-width: 630px) {
  .wrapper {
    height: 100vh;
    min-height: 0;
  }
}

.slide-wrapper {
  background-size: cover;
  height: 100%;
  background-position: center center;
  position: absolute;
  width: 100%;
  background-blend-mode: darken;
}
.slide-wrapper:nth-child(1) {
  background-color: rgba(115, 129, 153, 0.4);
}
.slide-wrapper:nth-child(1):before {
  background-color: rgba(115, 129, 153, 0.25);
}
.slide-wrapper:nth-child(1) .slide-content-text {
  text-shadow: 2px 5px 45px rgba(85, 96, 113, 0.25);
}
.slide-wrapper:nth-child(2) {
  background-color: rgba(144, 171, 184, 0.7);
}
.slide-wrapper:nth-child(2):before {
  background-color: rgba(144, 171, 184, 0.3);
}
.slide-wrapper:nth-child(2) .slide-content-text {
  text-shadow: 2px 5px 45px rgba(121, 142, 152, 0.2);
}
.slide-wrapper:nth-child(3) {
  background-color: rgba(86, 125, 156, 0.5);
}
.slide-wrapper:nth-child(3):before {
  background-color: rgba(86, 125, 156, 0.2);
}
.slide-wrapper:nth-child(3) .slide-content-text {
  text-shadow: 2px 5px 55px rgba(57, 83, 103, 0.4);
}
.slide-wrapper:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.slide-inner {
  position: relative;
  z-index: 2;
  height: 100%;
  overflow: hidden;
}
.slide-bg-text {
  font-family: "Playfair Display";
  color: #000;
  font-size: 42vh;
  line-height: 0.8;
  opacity: 0.03;
  font-weight: 900;
  margin-top: -4rem;
  position: absolute;
  top: 50%;
  left: 5vw;
  transform: translateY(-50%);
}
.slide-bg-text > p:last-child {
  padding-left: 4rem;
}
.slide-content {
  color: #fff;
  margin-top: 5rem;
  position: absolute;
  top: 50%;
  left: calc(13vw + (0.7) * 48vh);
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
}
@media (max-width: 1000px) {
  .slide-content {
    left: calc(13vw + 1rem);
  }
}
@media (max-height: 730px) {
  .slide-content {
    top: 30%;
    transform: translateY(-30%);
    left: calc(9vw + (0.7) * 16vw);
  }
}
.slide-content-text {
  font-family: "Playfair Display";
  font-size: 9rem;
  letter-spacing: 0.2rem;
  line-height: 0.87;
  font-weight: 700;
  will-change: auto;
}
@media (max-height: 790px) {
  .slide-content-text {
    font-size: 7rem;
  }
}
@media (max-width: 1150px) {
  .slide-content-text {
    font-size: 7rem;
  }
}
@media (max-width: 840px) {
  .slide-content-text {
    font-size: 5.5rem;
  }
}
@media (max-width: 630px) {
  .slide-content-text {
    margin-bottom: 5.5rem;
  }
}
@media (max-width: 500px) {
  .slide-content-text {
    font-size: 3.5rem;
  }
}
.slide-content-text > p:last-child {
  padding-left: 3rem;
}
.slide-content-cta {
  cursor: pointer;
  align-self: flex-start;
  margin-top: 4.5rem;
  margin-left: calc((0.3) * 48vh + 4.5rem);
  padding: 0.9rem 2.2rem;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  transition: 0.18s ease-in-out;
  font-weight: 700;
}
@media (max-width: 1000px) {
  .slide-content-cta {
    background-color: rgba(255, 255, 255, 0.3);
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
  }
}
@media (max-width: 630px) {
  .slide-content-cta {
    display: none;
  }
}
.slide-content-cta:hover {
  color: #000;
  background-color: #fff;
}
.slide-rect {
  height: 62vh;
  width: 48vh;
  border-image-slice: 10%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 13vw;
  border-width: 5vh;
  border-style: solid;
  box-shadow: 2px 2px 90px 30px rgba(41, 50, 61, 0.22);
  will-change: auto;
}
@media (max-height: 790px) {
  .slide-rect {
    left: 9vw;
    height: 20vw;
    width: 16vw;
    border-width: 5vh;
  }
}
@media (max-height: 730px) {
  .slide-rect {
    top: 30%;
    transform: translateY(-30%);
  }
}
.slide-rect-filter {
  filter: brightness(110%) contrast(110%) saturate(110%);
}
.slide-side-text {
  position: absolute;
  left: calc(13vw - 3rem);
  writing-mode: vertical-rl;
  top: calc((50% - (62vh / 2)) + (5vh / 2));
}
@media (max-height: 790px) {
  .slide-side-text {
    left: calc(9vw - 3rem);
    top: calc((50% - (20vw / 2)) + (5vh / 2));
  }
}
@media (max-height: 730px) {
  .slide-side-text {
    top: calc((40% - (20vw / 2)) + (5vh / 2));
  }
}
.slide-side-text > span:first-child {
  font-weight: 700;
}
.slide-side-text:after {
  content: "";
  width: 1px;
  background-color: #fff;
  height: 40px;
  display: block;
  position: absolute;
  top: calc(100% + 25px);
  left: 50%;
  transform: translateX(-50%);
}

.controls-container {
  position: absolute;
  z-index: 200;
  display: flex;
  bottom: 0;
  right: 0;
  align-items: flex-end;
}
@media (max-width: 630px) {
  .controls-container {
    display: none;
  }
}
.controls-button {
  cursor: pointer;
  background-color: rgba(208, 206, 204, 0.32);
  border: 0;
  padding: 1.6rem 2.2rem;
  flex-basis: 0;
  flex-grow: 1;
  min-width: 15rem;
  transition: 0.25s ease-in-out;
  outline: 0;
}
@media (max-width: 730px) {
  .controls-button {
    padding: 1.2rem 1.4rem;
    min-width: 13rem;
  }
}
.controls-button:not(.active):hover {
  color: #000;
  background-color: #fff;
}
.controls-button.active {
  cursor: default;
  font-weight: 700;
  background-color: #3b3e45;
  padding-top: 1.9rem;
  padding-bottom: 1.9rem;
  margin-bottom: -0.3rem;
  position: relative;
}
@media (max-width: 730px) {
  .controls-button.active {
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    margin-bottom: -0.15rem;
  }
}
.controls-button.active:after {
  content: "";
  background-color: #e3e3e3;
  height: 5px;
  width: calc(100% - 8px);
  position: absolute;
  top: 100%;
  left: 4px;
}
.controls-button:not(.active) + .controls-button {
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.pagination-container {
  position: absolute;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
}
@media (max-width: 920px) {
  .pagination-container {
    display: none;
  }
}
.pagination-item {
  width: 30px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: 0.18s ease-in-out;
}
.pagination-item + .pagination-item {
  margin-top: 1rem;
}
.pagination-item.active {
  background-color: #fff;
  position: relative;
  transform: translateX(-0.6rem);
  width: 35px;
}
.pagination-item.active:after {
  content: "";
  height: 4px;
  width: 2px;
  border-radius: 35%;
  background-color: #fff;
  display: inline-block;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateX(0.6rem) translateY(-50%);
}
.pagination-item:not(.active) {
  cursor: pointer;
}
.pagination-item:not(.active):hover {
  background-color: #fff;
  width: 35px;
}

@keyframes slideLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes slideRight {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes cutTextUp {
  from {
    clip-path: inset(0 0 -10% 0);
  }
  to {
    clip-path: inset(0 0 100% 0);
  }
}
@keyframes cutTextDown {
  from {
    clip-path: inset(100% 0 0 0);
  }
  to {
    clip-path: inset(-10% 0 -20% 0);
    opacity: 1;
  }
}
@keyframes cutTextDownFromTop {
  from {
    clip-path: inset(0 0 100% 0);
  }
  to {
    clip-path: inset(0 0 -30% 0);
    opacity: 1;
  }
}
@keyframes rectMovement {
  0% {
    transform: translateX(0) rotate(0) translateY(-50%);
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-50%);
    opacity: 0;
  }
}
@media (max-height: 730px) {
  @keyframes rectMovement {
    0% {
      transform: translateX(0) rotate(0) translateY(-30%);
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-30%);
      opacity: 0;
    }
  }
}
@keyframes rectMovementFromRight {
  0% {
    transform: translateX(calc(48vh)) rotate(12deg) translateY(-50%);
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translateX(0) rotate(0) translateY(-50%);
    opacity: 1;
    @media (max-height: 730px) {
      transform: translateX(0) rotate(0) translateY(-30%);
    }
  }
}
@media (max-height: 730px) {
  @keyframes rectMovementFromRight {
    0% {
      transform: translateX(calc(48vh)) rotate(12deg) translateY(-30%);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: translateX(0) rotate(0) translateY(-30%);
      opacity: 1;
    }
  }
}
@keyframes rectMovementRight {
  0% {
    transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-50%);
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: translateX(0) rotate(0) translateY(-50%);
    opacity: 1;
    @media (max-height: 730px) {
      transform: translateX(0) rotate(0) translateY(-30%);
    }
  }
}
@media (max-height: 730px) {
  @keyframes rectMovementRight {
    0% {
      transform: translateX(calc(-48vh + -13vw)) rotate(12deg) translateY(-30%);
    }
    40% {
      opacity: 1;
    }
    100% {
      transform: translateX(0) rotate(0) translateY(-30%);
      opacity: 1;
    }
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.slide-wrapper {
  opacity: 0;
  transition-delay: 1.4s;
  transition-duration: 0s;
  transition-property: opacity;
  will-change: opacity, transform;
}
.slide-wrapper:not(.active) {
  animation-delay: 0.5s;
  animation-name: slideLeft;
  animation-duration: 0.9s;
  animation-timing-function: cubic-bezier(0.18, 0.54, 0.52, 0.93);
  pointer-events: none;
}
.slide-wrapper:not(.active) .slide-content-text > p,
.slide-wrapper:not(.active) .slide-side-text {
  animation-name: cutTextUp;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
}
.slide-wrapper:not(.active) .slide-rect {
  animation-name: rectMovement;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}
.slide-wrapper.active {
  transition-delay: 0s;
  opacity: 1;
}
.slide-wrapper.active .slide-content-text > p {
  opacity: 0;
  animation-delay: 0.8s;
  animation-name: cutTextDown;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}
.slide-wrapper.active .slide-rect {
  opacity: 0;
  animation-name: rectMovementFromRight;
  animation-duration: 0.45s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-delay: 0.9s;
}
.is-previous .slide-wrapper:not(.active) {
  animation: none;
}
.is-previous .slide-wrapper:not(.active) .slide-rect {
  animation: none;
}
.is-previous .slide-wrapper.active {
  transform: translateX(-100%);
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  animation-name: slideRight;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.18, 0.54, 0.52, 0.93);
}
.is-previous .slide-wrapper.active .slide-rect {
  opacity: 0;
  animation-name: rectMovementRight;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.9s;
}

.first-load .slide-wrapper.active .slide-side-text,
.first-load .slide-wrapper.active .slide-content-cta,
.first-load .slide-wrapper.active .slide-rect,
.first-load .controls-container {
  opacity: 0;
  animation-name: fadeIn;
  animation-delay: 0.3s;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}
.first-load .slide-wrapper.active .slide-content-text > p {
  animation-name: fadeIn;
  animation-delay: 0.5s;
  animation-duration: 0.7s;
}
</style>
