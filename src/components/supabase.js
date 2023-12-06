import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ujhcuiladwpybdluglxv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqaGN1aWxhZHdweWJkbHVnbHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3Nzc3NjgsImV4cCI6MjAxNzM1Mzc2OH0.bH5WVpJzoaMOF4IuFzLZwoGSh_1ASshOgQ8IWYsLABc";

export const supabase = createClient(supabaseUrl, supabaseKey);
