<script setup lang="ts">
const sliderLauncherStore = useSliderLauncherStore()

const element: any = useTemplateRef('slider')

onMounted(() => {
  sliderLauncherStore.setup(element)
})
</script>

<template>
  <swiper-container
      ref="slider"
      class="gsky-horizontal-slider"
      slides-per-view="auto"
      :allow-touch-move="false"
      :simulate-touch="false"
      :keyboard="false"
      :init="false"
  >
    <slot />
  </swiper-container>
</template>

<style scoped lang="scss">
.gsky-horizontal-slider {
  height: calc(100dvh - 129px) !important;
}
</style>