const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://fkuegctjylijbjnzmawl.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrdWVnY3RqeWxpamJqbnptYXdsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODE5OTQzNiwiZXhwIjoyMDYzNzc1NDM2fQ.no2Ddi9kgH6gMZv6FMSuBD6su3IKyOPqaFmbbP-Z1o4";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;
