<script setup lang="ts">
defineProps<{
  label?: boolean
}>()
</script>

<template>
  <Icon name="lucide:grid" :size="31"/>
  <span v-if="label" class="font-weight-bold ml-3">Gridsky</span>
</template>

<style scoped lang="scss">
.font-weight-bold {
  position: relative;
  font-size: 22px;
  vertical-align: middle;
  top: 1px;
}
</style>