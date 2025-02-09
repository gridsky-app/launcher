import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import {createResolver} from "@nuxt/kit";
import path from "path";

const {resolve} = createResolver(import.meta.url);

export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },

    devtools: {
        enabled: true
    },

    app: {
        baseURL: process.env.NUXT_PUBLIC_BASE_URL,
        head: {
            link: [
                {rel: 'icon', type: 'image/png', href: '/favicon.png'},
            ],
        }
    },

    alias: {
        "@": resolve(__dirname, "./app")
    },

    css: [
        'vuetify/styles',
        'swiper/css',
        'swiper/css/pagination',
        'swiper/css/navigation',
        '@/styles/index.scss',
    ],

    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({
                    autoImport: true,
                }))
            })
        },
        '@nuxtjs/i18n',
        '@nuxt/fonts',
        '@nuxt/icon',
        'nuxt-swiper',
        '@pinia/nuxt',
        '@vueuse/nuxt',
    ],

    extends: [
        'github:gridsky-app/ui'
    ],

    i18n: {
        locales: ['en', 'it', 'es', 'fr', 'de', 'pt', 'ru'],
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        }
    },

    build: {
        transpile: ['vuetify'],
    },

    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            }
        },
    },

    imports: {
        dirs: ['composables', 'stores', 'utils'],
        presets: [
            {
                from: 'vuetify',
                imports: ['useDisplay']
            },
            {
                from: '@vueuse/core',
                imports: ['useDebounceFn']
            }
        ]
    },

    nitro: {
        output: {
            publicDir: path.join(__dirname, 'docs')
        }
    },

    compatibilityDate: '2024-11-28',
});