<template>
  <div class="contact-fp-wrap-box">
    <div class="contact-fp-wrap">
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="50%"
            y1="0%"
            x2="75%"
            y2="100%"
          >
            <stop offset="0%" stop-color="#F79533">
              <animate
                attributeName="stop-color"
                values="#F79533; #F37055; #EF4E7B; #A166AB; #5073B8; #1098AD; #07B39B; #6DBA82; #F79533"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>

            <stop offset="100%" stop-color="#F79533">
              <animate
                attributeName="stop-color"
                values="#F37055; #EF4E7B; #A166AB; #5073B8; #1098AD; #07B39B; #6DBA82; #F79533; #F37055"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <rect class="booton" height="60" width="320" />
      </svg>
      <div class="booton-text">BUTTON_17</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.contact-fp-wrap-box {
  background: #333;
  height: 120px;
}
.contact-fp-wrap {
  height: 60px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 320px;
  background: #333;
  text-align: center;
}

.booton {
  fill: transparent;
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 4px;
  stroke: url("#logo-gradient");
}

.booton-text {
  color: #fff;
  font-family: "Lato";
  font-size: 22px;
  letter-spacing: 8px;
  line-height: 32px;
  position: relative;
  top: -48px;
}

@keyframes draw {
  0% {
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 6px;
  }
  100% {
    stroke-dasharray: 760;
    stroke-dashoffset: 0;
    stroke-width: 2px;
  }
}

.contact-fp-wrap:hover .booton {
  cursor: pointer;
  -webkit-animation: 0.5s draw linear forwards;
  animation: 0.5s draw linear forwards;
}
</style>
