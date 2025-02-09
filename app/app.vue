<script setup lang="ts">
const {t} = useI18n()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} — ${t('name')}` : t('name');
  }
})
</script>

<template>
  <v-app>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <AppSplash />

  </v-app>
</template>