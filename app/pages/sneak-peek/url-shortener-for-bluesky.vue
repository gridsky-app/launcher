<script setup lang="ts">
useSeoMeta({
  title: 'URL Shortener for Bluesky',
  description: 'Shorten the link of any post on Gridsky simply by clicking the share button',
  ogImage: '/assets/og-image.png'
})

defineI18nRoute(false)

definePageMeta({
  layout: 'sneak-peek'
})
</script>

<template>
  <v-col align-self="center">

    <BlockHero
        title="Share in a breeze"
        :description="[
              'Shorten the link of any post on Gridsky',
              'simply by clicking the share button',
            ]"
    />

  </v-col>
  <v-col align-self="center" :cols="5" class="text-left hidden-sm-and-down">

    <AppPhone class="mx-auto hidden-sm-and-down">
      <iframe src="https://gridsky.app/superchinois801"/>
    </AppPhone>

  </v-col>
</template>