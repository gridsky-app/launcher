<script setup lang="ts">
const loaded = ref(false)

onMounted(() => {
  loaded.value = true
})

const splashClasses = computed(() => {
  const classes = ['gsky-splash']

  if (loaded.value) {
    classes.push('gsky-splash--loaded')
  }

  return classes
})
</script>

<template>
  <div :class="splashClasses" />
</template>

<style scoped lang="scss">
.gsky-splash {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  opacity: 1;
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;
  z-index: 999;

  &--loaded {
    opacity: 0;
  }
}
</style>