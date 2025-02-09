<script setup lang="ts">
const appPreviewStore = useAppPreviewStore()
const sliderLauncherStore = useSliderLauncherStore()
const sliderMainStore = useSliderMainStore()

const element: any = useTemplateRef('slider')

onMounted(() => {
  sliderMainStore.setup(element)
})
</script>

<template>
  <v-row no-gutters class="fill-height">
    <v-col :lg="6" class="hidden-md-and-down position-relative">

      <AppPhone>
        <iframe :src="appPreviewStore.src"/>
      </AppPhone>

    </v-col>
    <v-col :cols="12" :lg="6" class="bg-background">

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

.gsky-phone {
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 75vh;
  transform: translateX(-50%);

  @media(max-height: 640px) {
    display: none;
  }
}
</style>