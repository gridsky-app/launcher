<script setup lang="ts">
const dialog = ref(false)
</script>

<template>
  <v-dialog activator="parent" v-model="dialog" rounded fullscreen>
    <v-card class="pa-5" rounded color="#151515">

      <v-row>
        <v-col align-self="center">

          <div>
            <p>
              Let's see how awesome your profile looks
              <br v-if="$vuetify.display.width > 400"/>
              on our brand-new Bluesky client
            </p>

            <FormFieldUsernameCompact />
          </div>

        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">

</style>