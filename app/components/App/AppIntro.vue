<script setup lang="ts">
const emit = defineEmits(['launch'])

function onLaunchClick(e: any) {
  e.preventDefault()

  emit('launch')
}
</script>

<template>
  <div>
    <h1 class="text-h1 ml-n2">
      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid-3x3"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
    </h1>
    <div class="text-overline text-grey-darken-2 mt-6">
      Your Profile, Your Style
    </div>
    <p class="text-subtitle-1">
      The super duper client for Bluesky is coming together! 🫐<br />
      Give us the time to make you proud up in the atmosphere.
    </p>
    <div class="text-subtitle-1 mt-2">
      <a
          href="https://discord.gg/bPfgdDbj87"
          target="_blank"
          class="text-grey mr-4"
      >
        Join us on Discord
      </a>
      <a
          href="https://bsky.app/profile/gridsky.app"
          target="_blank"
          class="text-grey"
      >
        Follow us on @gridsky.app
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media(max-width: 640px) {
  .text-h1 {
    font-size: 76px;
  }

  .text-subtitle-1 {
    font-size: 17px;
  }
}
</style>