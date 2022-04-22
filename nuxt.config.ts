import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
  ],
  publicRuntimeConfig: {
    publicUrl: process.env.PUBLIC_URL,
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  },
  privateRuntimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY
  },
  typescript: {
    shim: false
  },
  windicss: {
    analyze: true
  }
})
