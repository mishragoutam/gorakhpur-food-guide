import { createClient } from '@supabase/supabase-js';
import fs from 'node:fs';
import path from 'node:path';

// Read .env
const envPath = path.resolve(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf8');

const parseEnv = (content) => {
  const result = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const match = trimmed.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      let val = match[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      result[key] = val;
    }
  }
  return result;
};

const env = parseEnv(envContent);
const url = env.VITE_SUPABASE_URL;
const key = env.VITE_SUPABASE_ANON_KEY;

console.log('--- SUPABASE CONNECTION CHECK ---');
console.log('Project URL:', url);
console.log('Key prefix:', key ? key.slice(0, 15) + '...' : 'NONE');

if (!url || !key) {
  console.error('ERROR: Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env');
  process.exit(1);
}

const supabase = createClient(url, key);

async function checkConnection() {
  const tables = ['restaurants', 'reviews', 'inquiries', 'audit_logs', 'group_sessions'];
  const results = {};

  console.log('\nTesting connection and checking tables...');

  for (const table of tables) {
    try {
      const { data, count, error } = await supabase
        .from(table)
        .select('*', { count: 'exact' })
        .limit(3);

      if (error) {
        results[table] = { ok: false, error: error.message, code: error.code };
      } else {
        results[table] = { ok: true, count, sampleCount: data?.length || 0, sample: data };
      }
    } catch (err) {
      results[table] = { ok: false, error: err.message };
    }
  }

  console.log('\n--- RESULTS ---');
  let allOk = true;
  for (const [table, res] of Object.entries(results)) {
    if (res.ok) {
      console.log(`[PASS] Table "${table}": Accessible (Total records: ${res.count})`);
      if (res.sampleCount > 0 && table === 'restaurants') {
        console.log(`       Sample restaurant: "${res.sample[0].name}" (${res.sample[0].area})`);
      }
    } else {
      allOk = false;
      console.log(`[FAIL] Table "${table}": Error -> ${res.error} (Code: ${res.code || 'N/A'})`);
    }
  }

  if (allOk) {
    console.log('\n>>> SUCCESS: Supabase connection is 100% verified and all tables are accessible! <<<');
  } else {
    console.log('\n>>> NOTICE: Connection to Supabase reached, but some tables are missing or require RLS setup. <<<');
  }
}

checkConnection();

