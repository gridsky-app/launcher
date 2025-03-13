<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<template>
  <section class="gsky-section-spacer">
    <v-container :width="960" style="margin-top: 150px; margin-bottom: 150px;">

      <v-card class="mb-n8" rounded="xl" style="position: relative; z-index: 1;">
        <v-img eager :src="image" />
      </v-card>
      <v-card max-width="100%" width="600px" class="mx-auto px-8 pt-14 pb-7 text-grey-lighten-2" rounded="xl">
        <slot />
        <!--
        With flexible themes and smart customization, Gridsky lets you tailor your feed to match your style—ensuring your posts stand out exactly as you envision.
        -->
      </v-card>
    </v-container>
  </section>
</template>

<style scoped lang="scss">
.v-container {
  max-width: 60vw;

  @media(min-width: 600px) {
    min-height: 720px;
  }

  .v-img {
    max-width: 100%;
  }

  @media(max-width: 599px) {
    max-width: 100vw;
    text-align: center;

    .v-card {
      background: transparent;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
}
</style>