<script setup lang="ts">
const appPreviewStore = useAppPreviewStore()
const sliderLauncherStore = useSliderLauncherStore()
const sliderMainStore = useSliderMainStore()
const display = useDisplay()
const {t} = useI18n()

useSeoMeta({
  title: t('page.index.title'),
  description: t('page.index.description'),
  ogImage: '/assets/og-image.png'
})

defineI18nRoute(false)
</script>

<template>
  <SectionPhone>
    <v-row no-gutters class="fill-height">
      <v-col align-self="center">

        <BlockIntro
            class="mx-auto"
            @launch="sliderLauncherStore.launch"
            @preview="sliderMainStore.slideTo(1)"
        />

      </v-col>
      <v-col align-self="center" :cols="5" class="text-left hidden-sm-and-down">

        <AppPhone class="mx-auto hidden-sm-and-down">
          <iframe src="https://gridsky.app/superchinois801"/>
          <v-chip
              class="text-overline" color="#666"
              href="https://patreon.com/join/gridsky" target="_blank"
          >
            Get featured
          </v-chip>
        </AppPhone>

      </v-col>
    </v-row>
  </SectionPhone>

  <SectionSpacedImage
      image="/media/screen-profile.webp"
  >
    <h4 class="text-h4 mt-4 mb-8">
      Your Profile,<br class="hidden-sm-and-up"/>
      Your Style
    </h4>
    <p class="text-grey-lighten-1">
      Gridsky is an alternative Bluesky client designed for creative users, offering a more customizable and visually
      engaging experience. It offers a refined, minimalistic design that puts your content first.
      Don't expect it to be perfect 🚧
    </p>
  </SectionSpacedImage>

  <SectionSpacedImage
      image="/media/screen-timeline.webp"
  >
    <h4 class="text-h4 mt-4 mb-8">
      A cleaner <br class="hidden-sm-and-up"/>Instagram <br class="hidden-sm-and-up"/>experience
    </h4>
    <p class="text-grey-lighten-1">
      A place where you can finally scroll through your timeline without intrusive ads or attention-grabbing gimmicks.
      It’s a calm space to reboot your profile, focus on creativity, and showcase your content the way it deserves 🗿
    </p>
  </SectionSpacedImage>

  <SectionPhone>
    <v-row no-gutters class="fill-height">
      <v-col align-self="center" :cols="5" class="text-right hidden-sm-and-down">

        <AppPhone class="mx-auto hidden-sm-and-down">
          <iframe :src="appPreviewStore.src"/>
          <v-chip
              class="text-overline" color="#666"
              href="https://patreon.com/join/gridsky" target="_blank"
          >
            Get featured
          </v-chip>
        </AppPhone>

      </v-col>
      <v-col align-self="center">

        <BlockPreview
            class="mx-auto"
            @launch="sliderLauncherStore.launch"
            @preview="sliderMainStore.slideTo(1)"
        />

      </v-col>
    </v-row>
  </SectionPhone>
</template>

<style scoped lang="scss">
section {
  max-height: 960px;
  height: calc(100vh - 96px);

  @media(min-width: 600px) {
    min-height: 720px;
  }
}

.gsky-phone {
  height: 560px;
}

.v-chip {
  position: absolute;
  left: 50%;
  bottom: -56px;
  transform: translateX(-50%);
}
</style>