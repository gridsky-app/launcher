<script setup lang="ts">
</script>

<template>
  <v-layout>

    <v-main width="100%" max-height="100dvh" class="fill-height scrollbar-invisible">
      <header class="hidden-xs" style="">
        <ToolbarBanner />
        <ToolbarNav />
        <v-divider />
      </header>

      <NuxtPage/>
    </v-main>

  </v-layout>
</template>

<style scoped>
header {
  position: relative;
  z-index: 2;
}
</style>