<script setup lang="ts">
const {t} = useI18n()

const appPreviewStore = useAppPreviewStore()
const runtimeConfig = useRuntimeConfig()

onMounted(() => {
  appPreviewStore.setSrc('https://gridsky.app/' + runtimeConfig.public.promoHandle)
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} — ${t('name')}` : t('name');
  }
})
</script>

<template>
  <v-app>

    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

  </v-app>
</template>

<style scoped lang="scss">

</style>