import { createClient } from '@supabase/supabase-js'
const runtimeConfig = useRuntimeConfig()
export const supabase = createClient(runtimeConfig.supabaseUrl, runtimeConfig.supabaseKey)

