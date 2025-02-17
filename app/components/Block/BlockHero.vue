<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  description: string[]
}>()
</script>

<template>
  <h3 class="text-h1 font-weight-medium ml-n1" v-text="title" />
  <div class="text-overline text-grey-darken-2 mt-6" v-text="subtitle" />
  <p>
    {{description[0]}}<br />
    <template v-if="description[1]">
      {{description[1]}}<br />
    </template>
    <template v-if="description[2]">
      {{description[2]}}<br />
    </template>
  </p>
  <BlockHeroLinks>
    <slot />
  </BlockHeroLinks>
</template>

<style scoped lang="scss">

</style>