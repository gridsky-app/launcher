<script setup lang="ts">
const appPreviewStore = useAppPreviewStore()
const sliderLauncherStore = useSliderLauncherStore()
const sliderMainStore = useSliderMainStore()
const display = useDisplay()

const firstSliderWidth = computed(() => {
  if (display.lgAndUp.value) {
    return {
      width: 'calc(100vw - 319px)'
    }
  }

  if (display.width.value < 640) {
    return {
      width: '100vw'
    }
  }

  return {
    width: 'calc(100vw - 97px)'
  }
})

useSeoMeta({
  title: 'Bluesky with creativity superpowers',
  description: 'Gridsky brings the Instagram experience to Bluesky, offering an alternative client that unleashes boundless creativity in your favorite social network',
  ogImage: '/assets/og-image.png'
})
</script>

<template>
  <AppPhone class="hidden-md-and-down">
    <iframe :src="appPreviewStore.src"/>
  </AppPhone>

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
.gsky-phone {
  position: absolute;
  top: 50dvh;
  transform: translate(0, -50%);
  left: 9vw;
  margin-top: 64px;
  z-index: v-bind('sliderLauncherStore.phoneZ');

  @media(max-height: 800px) {
    top: 60dvh;
  }

  @media(max-height: 640px) {
    display: none;
  }
}

@media(max-width: 640px) {
  :deep(.text-h1) {
    font-size: 76px !important;
  }

  :deep(.text-subtitle-1) {
    font-size: 17px !important;
  }
}
</style>