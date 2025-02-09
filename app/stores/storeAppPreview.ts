export const useAppPreviewStore = defineStore("app/preview", () => {
    const username: Ref<string> = ref('')
    const profile: Ref<any> = ref(undefined)

    const src: Ref<string> = ref('https://gridsky.app/gridsky.app')

    function setProfile(value: any) {
        profile.value = value
        src.value = `https://gridsky.app/${profile.value.handle}`
    }

    function setSrc(value: string) {
        src.value = value
    }

    return {
        username,
        profile,
        setProfile,
        src,
        setSrc,
    }
})