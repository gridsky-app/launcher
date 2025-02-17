<script setup lang="ts">
const appPreviewStore = useAppPreviewStore()
const sliderLauncherStore = useSliderLauncherStore()
const sliderMainStore = useSliderMainStore()
const {t} = useI18n()

useSeoMeta({
  title: t('page.index.title'),
  description: t('page.index.description'),
  ogImage: '/assets/og-image.png'
})

definePageMeta({
  layout: 'slider',
})
</script>

<template>
  <AppPhone class="hidden-sm-and-down">
    <iframe :src="appPreviewStore.src"/>
  </AppPhone>

  <ToolbarNav/>

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
</template>

<style scoped lang="scss">
.gsky-phone {
  position: absolute;
  left: 50vw;
  bottom: -45px;
  margin-left: -280px;
  height: 75vh;
  transform: translate(-50%);

  @media(max-height: 640px) {
    display: none;
  }
}
</style>