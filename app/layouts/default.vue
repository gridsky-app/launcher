<script setup lang="ts">
</script>

<template>
  <v-layout>

    <v-main width="100%" max-height="100dvh" class="fill-height scrollbar-invisible">
      <header class="hidden-xs">
        <ToolbarBanner />
        <ToolbarNav />
        <v-divider />
      </header>

      <NuxtPage/>
    </v-main>

  </v-layout>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 2;
}
</style>