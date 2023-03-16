// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['/assets/css/style.css'],
    app: {
        head: {
            title: 'NuxtPrototype',
            meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
            link: [{ rel: 'icon', href: '/icon.jpg' }],
        },
    },
})
