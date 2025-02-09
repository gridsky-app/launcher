<script setup lang="ts">
const appPreviewStore = useAppPreviewStore()
</script>

<template>
  <FormFieldUsername
      v-model="appPreviewStore.username"
  >
    <template #append-inner>
      <slot name="append-inner"/>
    </template>
    <slot/>
  </FormFieldUsername>
</template>

<style scoped lang="scss">

</style>