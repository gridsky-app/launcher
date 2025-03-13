<script setup lang="ts">
const appPreviewStore = useAppPreviewStore()
</script>

<template>
  <BlockHero
      :title="$t('block.preview.title')"
      :subtitle="$t('block.preview.subtitle')"
      :description="[
        $t('block.preview.description.line1'),
        $t('block.preview.description.line2'),
        $t('block.preview.description.line3'),
      ]"
  >
    <FormFieldUsername
        v-if="$vuetify.display.lgAndUp"
        v-model="appPreviewStore.username"
        class="mt-6"
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
        class="mt-5 pr-6"
    />
  </BlockHero>
</template>

<style scoped lang="scss">

</style>