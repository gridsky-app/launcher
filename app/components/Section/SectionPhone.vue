<script setup lang="ts">

</script>

<template>
  <section class="text-center">
    <slot />
  </section>
</template>

<style scoped lang="scss">
section {
  :deep(.text-h4) {
    color: white;
  }

  @media(max-width: 599px) {
    margin: 0 !important;
  }
}
</style>