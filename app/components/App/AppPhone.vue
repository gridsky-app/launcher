<script setup lang="ts">
const wifiStrength = ref(3)
const mobileStrength = ref(3)

const changeWifiStrength = () => {
  wifiStrength.value = Math.floor(Math.random() * 3) + 1
  setTimeout(changeWifiStrength, Math.random() * 10000 + 5000)
}

const changeMobileStrength = () => {
  mobileStrength.value = Math.random() < 0.8 ? 3 : 2
  setTimeout(changeWifiStrength, Math.random() * 10000 + 8000)
}

onBeforeMount(changeWifiStrength)
onBeforeMount(changeMobileStrength)
</script>

<template>
  <div class="gsky-phone">

    <div class="gsky-phone__nav">

      <div class="gsky-phone__nav__icons-preload">
        <Icon name="mdi:wifi-strength-2" />
        <Icon name="mdi:wifi-strength-3" />
        <Icon name="mdi:wifi-strength-4" />
        <Icon name="mdi:signal-cellular-2" />
        <Icon name="mdi:signal-cellular-3" />
      </div>
      <v-row>
        <v-col class="text-left">
          <b />
          <AppPhoneDate />
        </v-col>
        <v-col class="text-right">
          <div class="gsky-phone__nav__signal">
            <Icon :name="`mdi:wifi-strength-${wifiStrength}`" class="ms-1" />
            <Icon :name="`mdi:signal-cellular-${mobileStrength}`" class="ms-1" :size="15" style="margin-top: 2px" />
          </div>
        </v-col>
      </v-row>

    </div>

    <div class="gsky-phone__content">
      <slot />
    </div>

  </div>
</template>

<style scoped lang="scss">
.gsky-phone {
  position: relative;
  display: inline-block;
  margin: 0 auto;
  padding: 32px 0 0 0;
  border-radius: 20px;
  aspect-ratio: 9/16;
  background: black;
  box-shadow: 0px 0px 0px 5px #000, 0px 0px 0px 7px #222, 0px 0px 0px 8px #242424;
  z-index: 2;

  &__nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 32px;
    line-height: 32px;
    padding: 0 16px;
    font-size: 8px;
    text-align: right;
    color: white;

    &__icons-preload {
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
      pointer-events: none;
    }

    &__signal {
      position: relative;
      display: inline-block;

      .iconify {
        display: inline-block;
        font-size: 14px;
      }
    }

    .gsky-phone__datetime {
      display: block;
      font-weight: bold;
      font-size: 12px;
      margin-left: 32px;
    }

    b {
      position: absolute;
      display: block;
      color: transparent;
      position: absolute;
      top: 9px;
      left: 16px;
      width: 12px;
      height: 12px;
      background-color: #101010;
      border-radius: 12px;
      box-shadow: inset 0px -3px 2px 0px rgba(256, 256, 256, 0.2);

      &:after {
        content: '';
        position: absolute;
        background-color: #2d4d76;
        width: 6px;
        height: 6px;
        top: 2px;
        left: 2px;
        top: 3px;
        left: 3px;
        display: block;
        border-radius: 4px;
        box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
      }
    }
  }

  &__content {
    height: 100%;
  }

  :deep(iframe) {
    border: 0;
    border-radius: 0 0 20px 20px;
    min-width: 100%;
    min-height: 100%;
  }
}
</style>