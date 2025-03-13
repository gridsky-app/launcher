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
  title: 'Unleash your profile on Gridsky',
  description: 'Unlock the full potential of Gridsky! Support development and access exclusive premium features, including advanced appearance settings—forever',
  ogImage: '/assets/og-image.png',
})

defineI18nRoute(false)
</script>

<template>
  <AppPhone class="hidden-md-and-down">
    <iframe :src="appPreviewStore.src"/>
  </AppPhone>

  <SliderLauncher>
    <swiper-slide :style="firstSliderWidth">

      <SliderMain>
        <swiper-slide>

          <BlockUnleash/>

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