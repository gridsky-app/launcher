<script setup lang="ts">
const sliderLauncherStore = useSliderLauncherStore()
</script>

<template>
  <v-toolbar
      class="gsky-toolbar-nav"
      :height="96"
  >
    <v-row no-gutters>
      <v-col class="flex-grow-0 pl-7 gsky-toolbar-nav__logo" align-self="center">

        <nuxt-link to="/">
          <AppLogo label/>
        </nuxt-link>

      </v-col>
      <v-col class="flex-grow-1 gsky-toolbar-nav__links">

        <v-breadcrumbs class="hidden-sm-and-down mx-auto text-grey-lighten-2">
          <!--
          <v-breadcrumbs-item
              class="ml-n3 mx-sm-2 cursor-pointer"
              to="/"
              title="Discover"
          />
          -->

          <v-breadcrumbs-item
              class="cursor-pointer"
          >

            Community
            <ToolbarNavMenuDiscord
                id="1312466374282580069/1316295431830896691"
                channel="#welcome"
            />
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="hidden-sm-and-down"
          >
            {{ $t('toolbar.nav.feedback') }}
            <ToolbarNavMenuDiscord
                id="1312466374282580069/1337499584917667941"
                channel="#feedback"
            />
          </v-breadcrumbs-item>
          <!--
          <v-breadcrumbs-item
              class="hidden-sm-and-down"
          >
            Get Perks
            <ToolbarNavMenuPatreon
            />
          </v-breadcrumbs-item>
          -->
          <v-breadcrumbs-item
              href="https://patreon.com/gridsky"
              target="_blank"
              class="hidden-sm-and-down"
          >
            Changelog
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
              class="ml-6 hidden-xs"
          >
            <nuxt-link
                href="https://bsky.app/profile/gridsky.app"
                target="_blank"
            >
              <Icon name="simple-icons:bluesky" :size="18"/>
            </nuxt-link>
          </v-breadcrumbs-item>
          <!--
          <v-breadcrumbs-item
              class="hidden-xs"
              href="mailto:sponsor@gridsky.social"
          >
            <Icon name="lucide:at-sign" :size="19" style="margin-top: -4px;"/>
          </v-breadcrumbs-item>
          -->
        </v-breadcrumbs>

      </v-col>
      <v-col class="flex-grow-1 pr-7 gsky-toolbar-nav__launcher" align-self="center">
        <div class="float-right">
          <!--
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
          -->
          <v-btn
              variant="tonal" class="bg-white"
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
.v-breadcrumbs {
  padding-left: 220px;

  &-item {
    margin: 0 10px;
  }
}

.gsky-toolbar-nav {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  font-size: 16px;
  background: transparent;

  &__bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 240px;
    max-height: 20vh;
    pointer-events: none;
    background: linear-gradient(to bottom, rgb(var(--v-theme-background)), rgba(var(--v-theme-background), 0));
    z-index: 2;
  }

  &__logo {
    position: fixed;
    top: 25px;
    min-width: 300px;
  }

  &__links {
    padding-left: 280px;
    z-index: 99;
  }

  &__launcher {
    position: fixed;
    top: 29px;
    right: 0;
    z-index: 99;

    @media(min-width: 600px) {
      width: 160px;
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
  margin-top: -3px;
}
</style>