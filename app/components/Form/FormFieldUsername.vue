<script setup lang="ts">
defineProps<{
  doesNotExistNotice?: boolean
}>()

const appPreviewStore = useAppPreviewStore()
const agent = useAtprotoAgent()

const error = ref()

const debounceResolveUsername = useDebounceFn(() => {
  identityResolveHandle(makeHandleLonger(appPreviewStore.username))
      .then(async resolvedHandle => {
        appPreviewStore.profile = await agent
            .setService('public')
            .getProfile({
              actor: resolvedHandle.did
            })
            .then(response => {
              appPreviewStore.setProfile(response.data)
              appPreviewStore.src = `https://gridsky.app/${appPreviewStore.username}`

              error.value = false

              return response.data
            })
      })
      .catch(() => error.value = true)
}, 400)

watch(() => appPreviewStore.username, (val) => {
  appPreviewStore.profile = null
  debounceResolveUsername()
})
</script>

<template>
  <v-text-field
      :placeholder="$t('form.field.username.placeholder')"
      variant="outlined"
      rounded="lg"
      spellcheck="false"
      hide-details
      base-color="grey-darken-1"
      bg-color="transparent"
      :max-width="340"
  >
    <template #prepend-inner>
      <v-avatar
          v-if="!appPreviewStore.profile"
          :size="32"
          class="mr-1"
      >
        <Icon name="lucide:circle-user" :size="24" />
      </v-avatar>
      <ProfileAvatar
          v-else
          :profile="appPreviewStore.profile"
          :size="32"
          class="mr-1"
      />
    </template>
    <template #append-inner>
      <slot name="append-inner" />
    </template>

    <v-menu
        v-if="error"
        activator="parent"
        model-value
        :offset="[15, 0]"
    >
      <v-card rounded="lg" href="https://bsky.app/" target="_blank">
        <v-card-text
            class="pb-0"
        >
          {{ $t('form.field.username.notice.unavailable.line1')}}<br />
          {{ $t('form.field.username.notice.unavailable.line2')}}
        </v-card-text>
        <v-card-actions>
          <v-btn
              flat readonly
              :text="$t('form.field.username.notice.action')"
          />
        </v-card-actions>
      </v-card>
    </v-menu>

    <slot />
  </v-text-field>
</template>

<style scoped lang="scss">

</style>