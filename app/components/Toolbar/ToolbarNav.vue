<script setup lang="ts">
const sliderLauncherStore = useSliderLauncherStore()
const sliderMainStore = useSliderMainStore()
</script>

<template>
  <v-toolbar :height="80" border color="background">
    <v-row>
      <v-col class="flex-grow-0 hidden-md-and-down" style="min-width: 300px;" align-self="center">
        <div class="pl-8">
          <Icon name="lucide:grid" :size="32"/>
          <span class="font-weight-bold ml-3" style="font-size: 28px; vertical-align: middle;">Gridsky</span>
        </div>
      </v-col>
      <v-col class="flex-grow-1 text-center">
        <v-breadcrumbs class="mx-auto">
          <v-breadcrumbs-item
              class="mx-2 cursor-pointer"
              @click="sliderMainStore.slideTo(0)"
              :title="$t('toolbar.nav.explore')"
          />
          <v-breadcrumbs-item
              class="mx-2 cursor-pointer"
              @click="sliderMainStore.slideTo(1)"
              :title="$t('toolbar.nav.preview')"
          />
          <v-breadcrumbs-item
              class="mx-2 cursor-pointer"
          >
            {{$t('toolbar.nav.roadmap')}}
            <v-tooltip
                activator="parent"
                content-class="text-overline"
                location="bottom"
            >
              {{$t('toolbar.nav.roadmapStatus')}}
            </v-tooltip>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="mx-2 hidden-sm-and-down"
              href="https://discord.com/channels/1312466374282580069/1337499584917667941"
              target="_blank"
              :title="$t('toolbar.nav.feedback')"
          />
          <v-breadcrumbs-item
              class="mx-2 hidden-sm-and-down"
              href="https://discord.com/channels/1312466374282580069/1337499697258168361"
              target="_blank"
              :title="$t('toolbar.nav.support')"
          />
          <v-breadcrumbs-item
              class="mx-2 ml-3 hidden-xs"
              href="mailto:sponsor@gridsky.social"
          >
            <Icon name="lucide:at-sign"/>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="mx-2 hidden-xs"
              href="https://discord.gg/bPfgdDbj87"
              target="_blank"
          >
            <Icon name="simple-icons:discord" :size="24"/>
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </v-col>
      <v-col clsas="flex-grow-0" align-self="center" v-if="$vuetify.display.width > 680">
        <div class="float-right">
          <v-btn href="https://patreon.com/dxlliv" target="_blank" variant="tonal" class="px-0 mr-3" :min-width="36">
            <Icon name="simple-icons:googleplay" :size="16" />
            <v-tooltip activator="parent" content-class="text-overline" location="bottom" :text="$t('common.soon')" />
          </v-btn>
          <v-btn href="https://patreon.com/dxlliv" target="_blank" variant="tonal" class="px-0 mr-3" :min-width="36">
            <Icon name="simple-icons:appstore" :size="16" />
            <v-tooltip activator="parent" content-class="text-overline" location="bottom" :text="$t('common.soon')" />
          </v-btn>
          <v-btn
              variant="tonal" class="mr-6"
              :text="$t('common.launchApp')"
              @click="sliderLauncherStore.launch"
          />
        </div>
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<style scoped lang="scss">
.v-toolbar {
  border-width: 0 0 1px 0;

  * {
    text-decoration: none !important;
  }
}

.v-btn {
  backdrop-filter: blur(32px);
}

a {
  text-decoration: none !important;
}
</style>