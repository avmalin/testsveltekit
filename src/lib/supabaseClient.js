import { createClient } from '@supabase/supabase-js'

import dotenv from 'dotenv';
dotenv.config();

export const supabase = createClient(process.env.DB_PROJ_URL, process.env.DB_SERVICE_KEY)
