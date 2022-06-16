import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  meta: {
    title: 'Recap 2021-22',
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },
  vite: {
    plugins: [eslintPlugin()],
  },
  modules: ['@fullpage/nuxt-fullpage', '@nuxtjs/tailwindcss'],
});
