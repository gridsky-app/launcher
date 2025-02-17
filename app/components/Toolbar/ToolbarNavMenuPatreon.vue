<script setup lang="ts">
defineProps<{
}>()
</script>

<template>
  <ToolbarNavMenu
      href="https://patreon.com/gridsky"
      target="_blank"
      title="Patreon"
      subtitle="Unlock perks for your profile<br /> and fuel the development"
      icon="simple-icons:patreon"
  >
  </ToolbarNavMenu>
</template>

<style scoped lang="scss">
.iconify {
  position: absolute;
  right: -4px;
  bottom: -12px;
  opacity: 0.05;
}
</style>