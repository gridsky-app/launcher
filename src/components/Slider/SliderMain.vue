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
      style="height: calc(100vh - 128px);"
      mousewheel
  >
    <slot />
  </swiper-container>
</template>

<style scoped lang="scss">
:deep(swiper-slide) {
  display: grid;
  align-content: center;
}
</style>