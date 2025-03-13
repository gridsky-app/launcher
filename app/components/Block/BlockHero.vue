<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  description: string[]
}>()
</script>

<template>
  <div class="gsky-block-hero d-inline-block text-left">
    <h3 class="text-h3 mb-9 ml-n1" v-text="title" />
    <p class="text-grey-lighten-1">
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
  </div>
</template>

<style scoped lang="scss">

</style>