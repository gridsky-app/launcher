<script setup lang="ts">
const appPreviewStore = useAppPreviewStore()
const username = ref('')

const debouncedApplyPreview = useDebounceFn(() => {
  appPreviewStore.src = `https://gridsky.app/${username.value}`
}, 1000)

watch(() => username.value, () => {
  debouncedApplyPreview()
})
</script>

<template>
  <BlockLayout>

    <h1 class="text-h1 font-weight-thin ml-n2">
      Preview
    </h1>
    <div class="text-overline text-grey-darken-2 mt-6">
      your profile
    </div>
    <p class="text-subtitle-1">
      See how awesome your profile looks<br/>
      on our brand-new client called Gridsky.
    </p>
    <v-text-field
        v-model="username"
        placeholder="Type your username"
        variant="outlined"
        density="compact"
        rounded="lg"
        class="mt-6"
        :max-width="340"
    />

  </BlockLayout>
</template>

<style scoped lang="scss">

</style>