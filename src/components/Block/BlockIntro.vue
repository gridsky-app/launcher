<script setup lang="ts">
const emit = defineEmits(['launch'])

function onLaunchClick(e: any) {
  e.preventDefault()

  emit('launch')
}
</script>

<template>
  <BlockLayout>

    <h1 class="text-h1 font-weight-thin ml-n2">
      Gridsky
    </h1>
    <div class="text-overline text-grey-darken-2 mt-6">
      on a mission
    </div>
    <p class="text-subtitle-1">
      Bringing the Instagram experience<br/>
      to the Bluesky decentralized network.
    </p>
    <div class="text-subtitle-1 mt-2">
      <a
          href="https://gridsky.app"
          class="text-grey mr-4"
          @click="onLaunchClick"
      >
        Launch
      </a>
      <a
          href="https://discord.gg/bPfgdDbj87"
          target="_blank"
          class="text-grey"
      >
        Preview your profile
      </a>
    </div>

  </BlockLayout>
</template>

<style scoped lang="scss">

</style>