import { createClient } from '@supabase/supabase-js'
import { DB_PROJ_URL,DB_SERVICE_KEY } from '$env/static/private'

export const supabase = createClient(DB_PROJ_URL, DB_SERVICE_KEY)