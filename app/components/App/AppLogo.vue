<script setup lang="ts">
defineProps<{
  label?: boolean
}>()
</script>

<template>
  <div>
    <Icon name="lucide:grid" :size="31"/>
    <span v-if="label" class="font-weight-bold ml-4">Gridsky</span>
  </div>
</template>

<style scoped lang="scss">
div {
  font-family: "hogfish_demoregular", serif;
  font-size: 24px;
}

.font-weight-bold {
  position: relative;
  font-size: 22px;
  letter-spacing: 1px;
  vertical-align: middle;
  top: 1px;
}
</style>