import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
  ],
  // modules: ['nuxt3-supabase/module'],
  // supabase: {
  //   supabaseUrl: process.env.SUPABASE_URL,
  //   supabaseKey: process.env.SUPABASE_KEY,
  // },
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