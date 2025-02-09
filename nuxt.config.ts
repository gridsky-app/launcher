import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import {createResolver} from "@nuxt/kit";
import path from "path";

const {resolve} = createResolver(import.meta.url);

export default defineNuxtConfig({
    devtools: {
        enabled: true
    },

    srcDir: './src',

    app: {
        baseURL: process.env.NUXT_PUBLIC_BASE_URL,
        head: {
            link: [
                {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
            ],
        }
    },

    alias: {
        "@": resolve(__dirname, "./src")
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
        langDir: './locales',
        defaultLocale: 'en',
        locales: [
            {title: 'English', code: 'en', file: 'en/index.ts'},
        ],
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
        dirs: ['composables', 'stores'],
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