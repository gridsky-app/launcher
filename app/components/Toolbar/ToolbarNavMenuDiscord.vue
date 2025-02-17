<script setup lang="ts">
defineProps<{
  id: string
  channel: string
}>()
</script>

<template>
  <ToolbarNavMenu
      :href="`https://discord.com/channels/${id}`"
      target="_blank"
      title="Discord"
      :subtitle="channel"
      icon="simple-icons:discord"
  />
</template>

<style scoped lang="scss">
.iconify {
  position: absolute;
  right: -4px;
  bottom: -12px;
  opacity: 0.05;
}
</style>