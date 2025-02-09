<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  description: string[]
}>()
</script>

<template>
  <h1 class="text-h1 font-weight-thin ml-n2" v-text="title" />
  <div class="text-overline text-grey-darken-2 mt-6" v-text="subtitle" />
  <p class="text-subtitle-1">
    {{description[0]}}<br />
    {{description[1]}}
  </p>
  <BlockHeroLinks>
    <slot />
  </BlockHeroLinks>
</template>

<style scoped lang="scss">

</style>