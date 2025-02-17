<script setup lang="ts">
</script>

<template>
  <v-layout>

    <v-main>
      <v-container class="fill-height px-0 py-16">
        <v-row>
          <v-col :md="9" :offset-md="2">

            <div>
              <NuxtPage/>
            </div>

          </v-col>
        </v-row>
      </v-container>
    </v-main>

  </v-layout>
</template>

<style scoped lang="scss">
.v-main {
  padding-top: 10vh;
  padding-bottom: 10vh;
}
:deep(section) {
  &:not(:last-child) {
    padding: 0 0 24px 0;
  }

  h2 {
    margin-bottom: 12px;
  }

  p {
    opacity: 0.8;
  }
}
</style>