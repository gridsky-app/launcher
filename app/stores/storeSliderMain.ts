export const useSliderMainStore = defineStore("slider/main", () => {
    const slider: Ref<null | any> = ref(null)

    function setup(s) {
        slider.value = s.value

        const sliderConfig = {

        }

        Object.assign(slider.value, sliderConfig)

        slider.value.initialize()
    }

    function slideTo(index) {
        slider.value.swiper.slideTo(index, 500)
    }

    return {
        setup,
        slideTo,
    }
})