import { createClient } from '@supabase/supabase-js'
import { DB_PROJ_URL,DB_SERVICE_KEY } from '$env/static/private'
import dotenv from 'dotenv';
dotenv.config();

export const supabase = createClient(process.env.DB_PROJ_URL, process.env.DB_SERVICE_KEY)
