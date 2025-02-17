<script setup lang="ts">
definePageMeta({
  layout: 'slider',
})

defineI18nRoute(false)
</script>

<template>
  <SliderMain>
    <swiper-slide>
      <div class="px-16">
        <v-card class="pa-6 text-center" rounded="xl" color="transparent">
          <v-card-title class="text-h5">
            <h1 class="text-h3">
              An Instagram alternative<br/>
              created on Bluesky
            </h1>
          </v-card-title>
          <v-table dense class="mt-16 bg-transparent">
            <thead>
            <tr class="text-grey">
              <th class="text-left"></th>
              <th class="text-left">Gridsky</th>
              <th class="text-left">Instagram</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-left">
              <td>Customization</td>
              <td class="text-grey-lighten-1">Profile customization visible to everyone</td>
              <td class="text-grey-lighten-1">Limited personalization, mostly private</td>
            </tr>
            <tr class="text-left">
              <td>Content Control</td>
              <td class="text-grey-lighten-1">Decentralized, users have full ownership</td>
              <td class="text-grey-lighten-1">Controlled by Meta, algorithm-driven</td>
            </tr>
            <tr class="text-left">
              <td>Monetization</td>
              <td class="text-grey-lighten-1">Subscription-based with exclusive features</td>
              <td class="text-grey-lighten-1">Ads and influencer partnerships</td>
            </tr>
            <tr class="text-left">
              <td>Algorithm</td>
              <td class="text-grey-lighten-1">No forced algorithm, user-driven experience</td>
              <td class="text-grey-lighten-1">Feed dictated by AI recommendations</td>
            </tr>
            <tr class="text-left">
              <td>Ad-Free Experience</td>
              <td>
                <Icon name="lucide:check" class="text-blue"/>
              </td>
              <td>
                <Icon name="lucide:x" class="text-grey"/>
              </td>
            </tr>
            </tbody>
          </v-table>
        </v-card>
      </div>
    </swiper-slide>
    <swiper-slide class="text-center">

      <v-card border class="mx-auto" rounded="xl" width="50vw" height="48vh">
        <iframe src="https://gridsky.app/qqvv" style="zoom: 0.6"/>
      </v-card>

      <div>
        <v-chip
            href="https://patreon.com/join/dxlliv" target="_blank"
            class="d-inline-block text-overline mx-auto mt-4"
        >
          Wanna appear here?
        </v-chip>
      </div>

      <v-card class="px-6 pt-8 text-center" color="transparent">
        <v-card-title class="text-h4 font-weight-bold">Gridsky: Organize & Showcase Your Content</v-card-title>
        <v-card-subtitle class="text-h6 mt-2">
          A powerful alternative Bluesky client designed for creators
        </v-card-subtitle>
      </v-card>

    </swiper-slide>
    <swiper-slide>

      <v-container max-width="840" class="px-16">
        <v-row>
          <v-col>

          </v-col>
          <v-col>
            <v-card class="pa-5" elevation="5">
              <v-icon size="48" class="mb-3">mdi-palette</v-icon>
              <v-card-title class="text-h5">Advanced Customization</v-card-title>
              <v-card-text>Gridsky allows users to fully customize their profile's look & feel, and everyone can see it
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </swiper-slide>
    <swiper-slide>
      <v-container max-width="840" class="px-16">
        <v-row>
          <v-col>
            <v-card class="pa-5" elevation="5">
              <v-icon size="48" class="mb-3">mdi-server</v-icon>
              <v-card-title class="text-h5">Decentralized & Independent</v-card-title>
              <v-card-text>Built on the AT Protocol, you have full control over your content, with no algorithmic
                interference
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>

          </v-col>
        </v-row>
      </v-container>
    </swiper-slide>
    <swiper-slide>
      <v-container max-width="840" class="px-16">
        <v-row>
          <v-col>

          </v-col>
          <v-col>
            <v-card class="pa-5" elevation="5">
              <v-icon size="48" class="mb-3">mdi-lightbulb-on</v-icon>
              <v-card-title class="text-h5">Built for Creators</v-card-title>
              <v-card-text>Exclusive features like content filtering, media organization, and creative tools for
                professionals
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </swiper-slide>
    <swiper-slide>
      <div class="px-16">
        <v-row>
          <v-col>

          </v-col>
          <v-col>
            <v-card :width="500" class="mx-auto pa-6 text-center" color="transparent">
              <v-card-title class="text-h5">Why Choose Gridsky?</v-card-title>
              <v-card-text class="text-body-1 text-grey-lighten-1">
                Unlike traditional social platforms, Gridsky prioritizes user freedom, aesthetic personalization, and
                content
                control.
                No ads, no forced algorithms – just your content, your way
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </swiper-slide>
    <swiper-slide>
      <v-btn color="primary" x-large>Join Gridsky Now</v-btn>
    </swiper-slide>
  </SliderMain>
</template>

<style scoped lang="scss">
iframe {
  width: 100%;
  height: 100%;
}
</style>