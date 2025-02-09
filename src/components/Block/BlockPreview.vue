<script setup lang="ts">
const appPreviewStore = useAppPreviewStore()
</script>

<template>
  <BlockLayout>

    <BlockHero
        title="Preview"
        subtitle="your profile"
        description="Let's see how your profile looks<br/> on our brand-new Bluesky client."
    >
      <FormFieldUsername
          v-if="$vuetify.display.lgAndUp"
          v-model="appPreviewStore.username"
          density="compact"
          class="mt-6"
          :max-width="340"
          does-not-exist-notice
      >
        <template #append-inner>
          <v-btn icon variant="plain" class="mr-n3" :ripple="false">
            <Icon name="lucide:corner-down-left" :size="22" style="margin-top: -2px;" />
          </v-btn>
        </template>
      </FormFieldUsername>
      <FormFieldUsernameCompact
          v-else
          density="compact"
          :width="340" class="mt-5"
          max-width="calc(100vw - (8.3333333333% * 2))"
      />
    </BlockHero>

  </BlockLayout>
</template>

<style scoped lang="scss">

</style>