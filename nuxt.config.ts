export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
    preset: 'github-pages',
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Dilmurod Ismoilov — Full-Stack Developer',
      meta: [
        { name: 'description', content: 'Full-Stack Developer crafting fast, beautiful web experiences.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap'
        }
      ]
    }
  }
})
