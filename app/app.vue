<script setup lang="ts">
const {t} = useI18n()

const appPreviewStore = useAppPreviewStore()
const runtimeConfig = useRuntimeConfig()

onMounted(() => {
  console.log('https://gridsky.app/' + runtimeConfig.public.promoHandle)
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


    <!--
    <header class="gsky-header">
      <ToolbarBanner class="d-none"/>
      <ToolbarNav/>
    </header>
    -->

    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>


    <AppSplash/>

  </v-app>
</template>

<style scoped lang="scss">

</style>