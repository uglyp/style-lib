<template>
  <div class="hover-button-content">
    <AnimationButton />
    <GradBorder />
    <BlinkButton />
    <EffectHover />
  </div>
</template>

<script>
import GradBorder from './compontents/GradBorder'
import AnimationButton from './compontents/AnimationButton'
import BlinkButton from './compontents/BlinkButton'
import EffectHover from './compontents/EffectHover'
export default {
  components: {
    GradBorder,
    AnimationButton,
    BlinkButton,
    EffectHover
  }
}
</script>

<style scoped></style>
