<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <v-breadcrumbs class="text-overline text-grey ma-0 mb-9 pa-0">
    <v-breadcrumbs-item to="/" class="pl-0">
      Gridsky
    </v-breadcrumbs-item>
    <div class="mx-3 text-grey-darken-3">/</div>
    <v-breadcrumbs-item :title="title" />
  </v-breadcrumbs>
</template>

<style scoped lang="scss">

</style>