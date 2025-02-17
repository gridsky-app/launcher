<script setup lang="ts">
defineProps<{
}>()
</script>

<template>
  <ToolbarNavMenu
      title="Roadmap"
      subtitle="What's going on"
      icon="lucide:audio-waveform"
  >
    <v-divider class="mx-n12 my-6" />
    <v-list class="bg-transparent pa-0">
      <v-list-item class="px-0">
        <div class="text-overline text-grey-darken-3">
          Currently
        </div>
        <div class="text-grey">
          <ul>
            <li>Drafting a stable web client</li>
          </ul>
        </div>
      </v-list-item>
      <v-list-item class="px-0">
        <div class="text-overline text-grey-darken-3">
          What's next
        </div>
        <div class="text-grey">
          <ul>
            <li>Preparing a decent roadmap</li>
          </ul>
        </div>
      </v-list-item>
    </v-list>
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