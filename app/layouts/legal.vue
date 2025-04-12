<script setup lang="ts">
</script>

<template>
  <v-layout>

    <v-main>
      <v-container class="px-8 px-md-0">
        <v-row>
          <v-col :md="9" :offset-md="1">

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
.v-layout {
  height: 100vh !important;
}

.v-main {
  overflow-y: scroll !important;
}

.v-container {
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