export const useSliderLauncherStore = defineStore("slider/launcher", () => {
    const slider: Ref<null | any> = ref(null)
    const phoneZ: Ref<number> = ref(5)

    function setup(s) {
        slider.value = s.value

        const sliderConfig = {
            on: {
                slideChange() {
                    launch()
                }
            }
        }

        Object.assign(slider.value, sliderConfig)

        slider.value.initialize()
    }

    function launch() {
        window.location.href = 'https://gridsky.app'

        slider.value.swiper.slideTo(1, 500)

        setTimeout(() => {
            //window.location.href = 'https://gridsky.app'
        }, window.innerWidth >= 960 ? 5000 : 2500)
    }

    return {
        setup,
        launch,
        phoneZ,
    }
})