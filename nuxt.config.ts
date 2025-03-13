import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import path from "path";

export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },

    app: {
        baseURL: process.env.NUXT_PUBLIC_BASE_URL,
    },

    css: [
        'vuetify/styles',
        'swiper/css',
        './app/styles/index.scss',
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
        '@nuxt/fonts',
        'nuxt-swiper',
    ],

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

    nitro: {
        output: {
            publicDir: path.join(__dirname, 'docs')
        }
    },

    compatibilityDate: '2024-11-28',
});