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
                {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
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

    site: {
        url: 'https://gridsky.social',
        name: 'Gridsky'
    },

    sitemap: {
        // exclude all app sources
        excludeAppSources: true,
    },

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
        //'@nuxtjs/sitemap',
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
        locales: ['en', 'it', 'es', 'fr', 'de', 'pt'],
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        },
        pages: {
            'instagram-alternative-for-bluesky': false,
            'legal': false,
            'unleash': false,
        }
    },

    build: {
        transpile: ['vuetify'],
    },

    runtimeConfig: {
        public: {
            promoHandle: '',
        }
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

    compatibilityDate: '2024-11-28',
});