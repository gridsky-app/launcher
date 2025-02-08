export const useAppPreviewStore = defineStore("app/preview", () => {
    const src: Ref<string> = ref('https://gridsky.app/gridsky.app')

    function setSrc(value: string) {
        src.value = value
    }

    return {
        src,
        setSrc,
    }
})