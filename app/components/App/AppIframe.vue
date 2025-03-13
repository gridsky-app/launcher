<script setup lang="ts">
const emit = defineEmits(['launch'])

const iframeOpacity = ref(false)

const classes = computed(() => {
  const list = ['gsky-iframe']

  if (iframeOpacity.value) {
    list.push('gsky-iframe--visible')
  }

  return list
})

onMounted(() => {
  window.addEventListener('message', function(event) {
    if (event.data === 'mounted') {
      setTimeout(() => {
        iframeOpacity.value = true
      }, 1000)
    }
  })
})
</script>

<template>
  <div :class="classes">
    <iframe
        src="https://gridsky.pages.dev/welcome"
    />
    <div
        class="gsky-iframe__launcher"
        @click="emit('launch')"
    />
  </div>
</template>

<style scoped lang="scss">
.gsky-iframe {
  width: calc(100vw + 1px);
  border-left: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  margin-left: -1px;

  @media(max-width: 599px) {
    width: 100vw;
    border-left: 0;
    margin-left: 0;
  }

  iframe {
    width: 100%;
    height: 100dvh;
    border: 0;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &--visible {
    iframe {
      opacity: 1;
    }
  }

  &__launcher {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }
}
</style>