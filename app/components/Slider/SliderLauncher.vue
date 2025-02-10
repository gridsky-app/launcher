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
  padding-top: 60px;

  @media(max-width: 599px) {
    padding-top: 80px;

    :deep(swiper-container) {
      height: calc(100dvh - 80px);
    }
  }
}
</style>