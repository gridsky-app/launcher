<script setup lang="ts">
const sliderLauncherStore = useSliderLauncherStore()
const sliderMainStore = useSliderMainStore()
</script>

<template>
  <v-toolbar
      class="gsky-toolbar-nav" :height="96"
  >
    <v-row>
      <v-col class="flex-grow-0 gsky-toolbar-nav__logo" align-self="center">
        <nuxt-link class="ml-3" to="/">
          <AppLogo/>
        </nuxt-link>
      </v-col>
      <v-col class="flex-grow-1 text-center">
        <v-breadcrumbs class="mx-auto text-grey">
          <v-breadcrumbs-item
              class="ml-n3 mx-sm-2 cursor-pointer"
              @click="sliderMainStore.slideTo(sliderMainStore.slider.swiper.activeIndex === 0 ? 1 : 0)"
              :title="$t('toolbar.nav.explore')"
          />
          <v-breadcrumbs-item
              class="mx-2 cursor-pointer"
          >
            {{ $t('toolbar.nav.roadmap') }}
            <ToolbarNavMenuRoadmap/>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="mx-2 cursor-pointer"
          >
            Patreon
            <ToolbarNavMenuPatreon/>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="mx-2 hidden-sm-and-down"
          >
            {{ $t('toolbar.nav.feedback') }}
            <ToolbarNavMenuDiscord
                id="1312466374282580069/1337499584917667941"
                channel="#feedback"
            />
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="mx-2 hidden-sm-and-down"
          >
            {{ $t('toolbar.nav.support') }}
            <ToolbarNavMenuDiscord
                id="1312466374282580069/1337499697258168361"
                channel="#support"
            />
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="mx-2 ml-3 hidden-xs"
              href="mailto:sponsor@gridsky.social"
          >
            <Icon name="lucide:at-sign" :size="18"/>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="mx-2 hidden-xs"
          >
            <nuxt-link
                href="https://bsky.app/profile/gridsky.app"
                target="_blank"
            >
              <Icon name="simple-icons:bluesky" :size="18"/>
            </nuxt-link>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="mx-2 hidden-xs"
          >
            <nuxt-link
                href="https://discord.gg/bPfgdDbj87"
                target="_blank"
            >
              <Icon name="simple-icons:discord" :size="23"/>
            </nuxt-link>
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </v-col>
      <v-col class="flex-grow-0 gsky-toolbar-nav__launcher" align-self="center">
        <div class="float-right">
          <v-btn variant="tonal" class="px-0 mr-3 hidden-xs" :min-width="36">
            <Icon name="simple-icons:googleplay" :size="16"/>
            <v-tooltip
                activator="parent" content-class="text-overline hidden-md-and-down"
                location="bottom" :text="$t('common.soon')"
            />
            <v-menu activator="parent" location="bottom center" :offset="[12, 0]" v-if="$vuetify.display.mdAndDown">
              <v-chip class="bg-white text-overline" :text="$t('common.soon')"/>
            </v-menu>
          </v-btn>
          <v-btn variant="tonal" class="px-0 mr-3 hidden-xs" :min-width="36">
            <Icon name="simple-icons:appstore" :size="16"/>
            <v-tooltip
                activator="parent" content-class="text-overline hidden-md-and-down"
                location="bottom" :text="$t('common.soon')"
            />
            <v-menu activator="parent" location="bottom center" :offset="[12, 0]" v-if="$vuetify.display.mdAndDown">
              <v-chip class="bg-white text-overline" :text="$t('common.soon')"/>
            </v-menu>
          </v-btn>
          <v-btn
              variant="tonal" class="mr-8"
              :text="$t('common.launchApp')"
              @click="sliderLauncherStore.launch"
          />
        </div>
      </v-col>
    </v-row>
  </v-toolbar>
  <div class="gsky-toolbar-nav__bg"/>
</template>

<style scoped lang="scss">
.gsky-toolbar-nav {
  position: absolute;
  left: 0;
  right: 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  font-size: 16px;
  background: transparent;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 35vh;
    //backdrop-filter: blur(128px);
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(var(--v-theme-background), 1) 15%, rgba(var(--v-theme-background), 0) 100%);
    z-index: 2;
  }

  &__logo {
    padding-left: 32px;
  }

  &__launcher {
    @media(min-width: 600px) {
      min-width: 260px;
    }
  }

  * {
    text-decoration: none !important;
  }

  .v-row {
    z-index: 3;
  }
}

.v-btn {
  backdrop-filter: blur(32px);
}

a {
  text-decoration: none !important;
}

.iconify {
  margin-top: -2px;
}
</style>