<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  icon: string
  href?: string
  target?: string
}>()
</script>

<template>
  <v-menu activator="parent" open-on-hover>
    <v-card
        :href="href"
        :target="target"
        class="mt-6 overflow-hidden"
        variant="plain"
        :ripple="false"
        :min-width="220"
    >
      <v-card-text class="px-6 py-6 pr-8 overflow-hidden">
        <Icon :name="icon" :size="78"/>
        <div class="text-overline mt-n1" v-text="title" />
        <div class="text-grey" v-if="subtitle" v-html="subtitle" />
        <slot />
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<style scoped lang="scss">
.v-card {
  backdrop-filter: blur(56px);
  background: rgba(44, 44, 44, 0.25) !important;
  opacity: 1 !important;
}

.iconify {
  position: absolute;
  right: -4px;
  bottom: -12px;
  opacity: 0.05;
}
</style>