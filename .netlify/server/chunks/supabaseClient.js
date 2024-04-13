import { createClient } from "@supabase/supabase-js";
const DB_PROJ_URL = "https://moavbysdprjnhpthsenk.supabase.co";
const DB_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vYXZieXNkcHJqbmhwdGhzZW5rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjgzMzIzMiwiZXhwIjoyMDI4NDA5MjMyfQ.6ITIUVxexAZ5jJcmmuSRBuoTtLPj6zMe66D-uBRZn1s";
const supabase = createClient(DB_PROJ_URL, DB_SERVICE_KEY);
export {
  supabase as s
};
