<script setup lang="ts">
import {useDisplay} from "vuetify";

const appPreviewStore = useAppPreviewStore()
const sliderLauncherStore = useSliderLauncherStore()
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
  description: 'Gridsky brings the Instagram experience to Bluesky, offering an alternative client that unleashes boundless creativity in your favorite decentralized network',
  ogImage: '/assets/og-image.png'
})
</script>

<template>
  <AppPhone>
    <iframe :src="appPreviewStore.src"/>
  </AppPhone>

  <SliderLauncher>
    <swiper-slide :style="firstSliderWidth">

      <v-row no-gutters class="fill-height">
        <v-col :cols="7" :offset="5" class="bg-background">

          <SliderMain>
            <swiper-slide>

              <BlockIntro @launch="sliderLauncherStore.launch"/>

            </swiper-slide>
            <swiper-slide>

              <BlockPreview/>

            </swiper-slide>
          </SliderMain>

        </v-col>
        <v-col class="hidden-sm-and-down"/>
      </v-row>

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
  top: 50vh;
  transform: translate(0, -50%);
  left: 10vw;
  margin-top: 64px;
  z-index: v-bind('sliderLauncherStore.phoneZ');
}

@media(max-width: 640px) {
  .text-h1 {
    font-size: 76px !important;
  }

  .text-subtitle-1 {
    font-size: 17px !important;
  }
}
</style>