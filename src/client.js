import { createClient } from "@supabase/supabase-js";

const URL = 'https://slqueasstagfxnfuwrng.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNscXVlYXNzdGFnZnhuZnV3cm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjUwMTEsImV4cCI6MjAwMzY0MTAxMX0.uhh-RWnCzJES8YQEkeIhIkV7PqTKl7H-koGcfop0PWM';

export const supabase = createClient(URL, API_KEY);