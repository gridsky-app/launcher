<script setup lang="ts">
const sliderLauncherStore = useSliderLauncherStore()
const sliderMainStore = useSliderMainStore()
const display = useDisplay()
const {t} = useI18n()

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
    width: 'calc(100vw - 97px)'
  }
})

useSeoMeta({
  title: t('page.index.title'),
  description: t('page.index.description'),
  ogImage: '/assets/og-image.png'
})
</script>

<template>
  <SliderLauncher>
    <swiper-slide :style="firstSliderWidth">

      <SliderMain>
        <swiper-slide>

          <BlockIntro
              @launch="sliderLauncherStore.launch"
              @preview="sliderMainStore.slideTo(1)"
          />

        </swiper-slide>
        <swiper-slide>

          <BlockPreview/>

        </swiper-slide>
      </SliderMain>

    </swiper-slide>
    <client-only>
      <swiper-slide style="width: 100vw;">

        <LauncherIframe
            @launch="sliderLauncherStore.launch"
        />

      </swiper-slide>
    </client-only>
  </SliderLauncher>
</template>

<style scoped lang="scss">
</style>