<script setup lang="ts">
const emit = defineEmits(['launch', 'preview'])

function onLaunchClick(e: any) {
  e.preventDefault()

  emit('launch')
}
</script>

<template>
  <BlockHero
      :title="$t('block.intro.title')"
      :subtitle="$t('block.intro.subtitle')"
      :description="[
        $t('block.intro.description.line1'),
        $t('block.intro.description.line2'),
        $t('block.intro.description.line3'),
      ]"
  >
    <BlockHeroLinks>
      <a
          href="https://gridsky.app"
          class="mr-4"
          @click="onLaunchClick"
          v-text="$t('block.intro.links.launch')"
      />
      <a
          href="https://patreon.com/join/gridsky"
          target="_blank"
          class="cursor-pointer"
          v-text="$t('block.intro.links.support')"
      />
    </BlockHeroLinks>
  </BlockHero>
</template>

<style scoped lang="scss">

</style>