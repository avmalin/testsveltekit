import { createClient } from '@supabase/supabase-js'

const DB_PROJ_URL = 'https://moavbysdprjnhpthsenk.supabase.co'
const DB_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vYXZieXNkcHJqbmhwdGhzZW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4MzMyMzIsImV4cCI6MjAyODQwOTIzMn0.-CYrB8kOkoQjykSi01L9eW-RsDTnikB5r_d8ysGmMEI'
export const supabase = createClient(DB_PROJ_URL, DB_ANON_KEY)