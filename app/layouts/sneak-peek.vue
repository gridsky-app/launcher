<script setup lang="ts">

</script>

<template>
  <v-layout>

    <v-main>

      <SectionPhone>
        <v-row no-gutters class="fill-height">
          <slot />
        </v-row>
      </SectionPhone>

    </v-main>

  </v-layout>
</template>

<style scoped lang="scss">
section {
  max-height: 960px;
  height: calc(100vh - 96px);

  @media(min-width: 600px) {
    min-height: 780px;
  }
}

:deep(.gsky-block-hero) {
  zoom: 1.2;
}

:deep(.gsky-phone) {
  height: 580px;
  margin-top: 8px;
}
</style>