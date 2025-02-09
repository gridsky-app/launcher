<script setup lang="ts">
const appPreviewStore = useAppPreviewStore()

function onPreviewClick() {
  window.location.href = `https://gridsky.app/profile/${appPreviewStore.username}`
}
</script>

<template>
  <FormFieldUsername
      v-model="appPreviewStore.username"
      @keydown.enter="onPreviewClick"
  >
    <template #append-inner>
      <v-btn icon variant="plain" class="mr-n3" :ripple="false" @click="onPreviewClick">
        <Icon name="lucide:sparkles" :size="22" style="margin-top: -2px;" />
      </v-btn>
    </template>
  </FormFieldUsername>
</template>

<style scoped lang="scss">

</style>