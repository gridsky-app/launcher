<script setup lang="ts">
const sliderLauncherStore = useSliderLauncherStore()
const display = useDisplay()

const firstSliderWidth = computed(() => {
  if (display.lgAndUp.value) {
    return {
      width: 'calc(100vw - 319px)'
    }
  }

  if (display.width.value < 600) {
    return {
      width: '100vw'
    }
  }

  return {
    //width: 'calc(100vw - 97px)'
  }
})
</script>

<template>
  <v-layout>
    <v-main>

      <SliderLauncher>
        <swiper-slide :style="firstSliderWidth">

          <NuxtPage />

        </swiper-slide>
        <client-only>
          <swiper-slide style="width: 100vw;">

            <LauncherIframe
                @launch="sliderLauncherStore.launch"
            />

          </swiper-slide>
        </client-only>
      </SliderLauncher>

    </v-main>
  </v-layout>
</template>

<style scoped lang="scss">

</style>