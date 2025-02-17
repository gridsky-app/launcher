<script setup lang="ts">

</script>

<template>
  <div class="px-8 px-sm-0 pt-14 pt-md-16 mt-md-12 ml-md-16 ml-lg-n16">
    <v-row>
      <v-col :cols="12" :sm="10" :offset-sm="2" :offset-md="6" :offset-lg="7">

        <slot />

      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">

</style>