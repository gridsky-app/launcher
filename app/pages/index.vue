<script setup lang="ts">
import {useDisplay} from "vuetify"

const display = useDisplay()

const slider: any = useTemplateRef('slider')

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

onMounted(() => {
  if (!slider.value) {
    return
  }

  const sliderConfig = {
    on: {
      slideChange() {
        onLaunch()
      }
    }
  }

  Object.assign(slider.value, sliderConfig)

  slider.value.initialize()
})

function onLaunch() {
  window.location.href = 'https://gridsky.app'
}

useSeoMeta({
  title: 'The super duper client for Bluesky',
  description: 'Gridsky brings the Instagram experience to Bluesky — but in its own way. An alternative client that focuses on what really matters, cutting out the noise',
  ogImage: '/media/screen-timeline.webp',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <swiper-container
      ref="slider"
      class="fill-height"
      slides-per-view="auto"
      :enabled="false"
      :init="false"
  >
    <swiper-slide :style="firstSliderWidth">

      <v-row no-gutters class="fill-height">
        <v-col
            :cols="10" :offset="1" :offset-md="2"
            class="fill-height" style="align-content: center;"
        >

          <AppIntro @launch="onLaunch"/>

        </v-col>
        <v-col class="hidden-sm-and-down"/>
      </v-row>

    </swiper-slide>
    <client-only>
      <swiper-slide style="width: 100vw;">

        <AppIframe @click="onLaunch"/>

      </swiper-slide>
    </client-only>
  </swiper-container>
</template>

<style scoped lang="scss">

</style>