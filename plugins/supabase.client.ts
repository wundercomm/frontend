import { defineNuxtPlugin } from '#app'
import type { SupabaseClient } from '@supabase/supabase-js'
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    const supabase = createClient(config.supabaseUrl, config.supabaseKey)

    nuxtApp.vueApp.provide('supabase', supabase)
    nuxtApp.provide('supabase', supabase)
})
