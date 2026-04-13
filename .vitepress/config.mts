import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TP2",
  description: "Revue de code documentée TP2",
  base: '/documantation-appweb-trpr02/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Navigation',
        items: [
          { text: 'Markdown Examples', link: '/Revue-code-Seance-1' },
          { text: 'Markdown Examples', link: '/Revue-code-Seance-2' },
          { text: 'Markdown Examples', link: '/Revue-code-Seance-3' },
          { text: 'Markdown Examples', link: '/Revue-code-Seance-4' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
