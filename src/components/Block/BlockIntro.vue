<script setup lang="ts">
const emit = defineEmits(['launch', 'preview'])

function onLaunchClick(e: any) {
  e.preventDefault()

  emit('launch')
}
</script>

<template>
  <BlockLayout>

    <BlockHero
        title="Gridsky"
        subtitle="on a mission"
        description="Bringing the Instagram experience<br/> to the Bluesky social networks."
    >
      <BlockHeroLinks>
        <a
            href="https://gridsky.app"
            class="text-grey mr-4"
            @click="onLaunchClick"
        >
          Launch
        </a>
        <a
            @click="emit('preview')"
            class="text-grey cursor-pointer"
        >
          Preview your profile
        </a>
      </BlockHeroLinks>
    </BlockHero>

  </BlockLayout>
</template>

<style scoped lang="scss">

</style>