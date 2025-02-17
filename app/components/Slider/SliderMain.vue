<script setup lang="ts">
const sliderMainStore = useSliderMainStore()

const element: any = useTemplateRef('slider')

onMounted(() => {
  sliderMainStore.setup(element)
})
</script>

<template>
  <swiper-container
      ref="slider"
      direction="vertical"
      mousewheel
  >
    <slot/>
  </swiper-container>
</template>

<style scoped lang="scss">
swiper-container {
  height: 100dvh;
}

:deep(swiper-slide) {
  display: grid;
  align-content: center;
}
</style>