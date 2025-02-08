<script setup lang="ts">
const sliderLauncherStore = useSliderLauncherStore()
const sliderMainStore = useSliderMainStore()
</script>

<template>
  <v-toolbar :height="80" color="background">
    <v-row>
      <v-col class="flex-grow-0 hidden-md-and-down" style="min-width: 300px;" align-self="center">
        <div class="px-5">
          <Icon name="lucide:grid" :size="32" style="vertical-align: middle;" />
          <span class="font-weight-bold ml-3" style="font-size: 28px; vertical-align: middle;">Gridsky</span>
        </div>
      </v-col>
      <v-col class="flex-grow-1 text-center">
        <v-breadcrumbs class="mx-auto">
          <v-breadcrumbs-item
              class="mx-2 cursor-pointer"
              @click="sliderMainStore.slideTo(0)"
          >
            Explore
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="mx-2 cursor-pointer"
              @click="sliderMainStore.slideTo(1)"
          >
            Preview
          </v-breadcrumbs-item>
          <v-breadcrumbs-item class="mx-2 cursor-pointer">
            Roadmap
            <v-tooltip
                activator="parent"
                content-class="text-overline"
                location="bottom"
            >
              Looking for sponsors
            </v-tooltip>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="mx-2 hidden-sm-and-down"
              href="https://discord.com/channels/1312466374282580069/1337499584917667941"
              target="_blank"
          >
            Feedback
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="mx-2 hidden-sm-and-down"
              href="https://discord.com/channels/1312466374282580069/1337499697258168361"
              target="_blank"
          >
            Support
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="mx-2 ml-3 hidden-sm-and-down"
              href="mailto:sponsor@gridsky.social"
          >
            <Icon name="lucide:at-sign" />
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="mx-2 hidden-sm-and-down"
              href="https://discord.gg/bPfgdDbj87"
              target="_blank"
          >
            <Icon name="simple-icons:discord" :size="24" />
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </v-col>
      <v-col clsas="flex-grow-0" align-self="center">
        <div class="float-right">
          <v-btn href="https://patreon.com/dxlliv" target="_blank" variant="tonal" class="px-0 mr-3" :min-width="36">
            <Icon name="simple-icons:patreon" :size="16" style="margin-top: 1px;" />
          </v-btn>
          <v-btn href="https://patreon.com/dxlliv" target="_blank" variant="tonal" class="px-0 mr-3" :min-width="36">
            <Icon name="lucide:unplug" :size="19" />
          </v-btn>
          <v-btn variant="tonal" class="mr-5" @click="sliderLauncherStore.launch">
            Launch App
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<style scoped lang="scss">
.v-toolbar * {
  text-decoration: none !important;
}

a {
  text-decoration: none !important;

  .iconify {
    vertical-align: middle;
  }
}
</style>