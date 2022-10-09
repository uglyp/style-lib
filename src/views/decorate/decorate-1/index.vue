<template>
  <div class="box_decorate2">
    <div class="wave_decorate" />
  </div>
</template>

<script>
export default {
  mounted() {
    const wave = document.querySelector('.wave_decorate')
    let i = 0
    const num = 10

    for (i; i < 20; i++) {
      const span = document.createElement('span')
      span.style.height = `${num * 10}px`
      span.style.width = `${num * 2}px`
      span.style.animationDelay = `${i / 5}s`
      wave.append(span)
    }
  }
}
</script>

<style>
.box_decorate2 {
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background: #02143c;
}

.wave_decorate {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.wave_decorate span {
  background: var(--yellow);
  animation: wave 3s ease-in-out infinite;
  vertical-align: bottom;
}

@keyframes wave {
  30%,
  70% {
    background-color: #ff8c2f;
  }
  40% {
    transform: translateY(-50px) scaleY(2);
  }
}
</style>
