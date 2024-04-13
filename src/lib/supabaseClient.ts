import { createClient } from '@supabase/supabase-js'

import dotenv from 'dotenv';
dotenv.config();
const projectUrl:string = process.env.DB_PROJ_URL ??''
const serviceKey:string = process.env.DB_SERVICE_KEY ??''
export const supabase = createClient(projectUrl, serviceKey)
