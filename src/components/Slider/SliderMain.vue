<script setup lang="ts">
const sliderMainStore = useSliderMainStore()

const element: any = useTemplateRef('slider')

onMounted(() => {
  sliderMainStore.setup(element)
})
</script>

<template>
  <v-row no-gutters class="fill-height">
    <v-col :cols="12" :lg="7" :offset-lg="5" class="bg-background">

      <swiper-container
          ref="slider"
          direction="vertical"
          mousewheel
      >
        <slot/>
      </swiper-container>

    </v-col>
    <v-col class="hidden-sm-and-down"/>
  </v-row>
</template>

<style scoped lang="scss">
swiper-container {
  height: calc(100dvh);
}

:deep(swiper-slide) {
  display: grid;
  align-content: center;
}
</style>