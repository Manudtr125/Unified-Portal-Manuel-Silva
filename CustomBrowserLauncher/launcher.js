#!/usr/bin/env node
// CustomBrowserLauncher - demo node script to parse portal:// URL and open browser
const { execFile } = require('child_process');
const { URL } = require('url');
const ipc = process.argv[2];
if (!ipc) { console.error('Usage: node launcher.js "portal://open-app?app=...&url=..."'); process.exit(1); }
try {
  const u = new URL(ipc);
  const params = u.searchParams;
  const url = params.get('url') || 'https://example.com';
  // Fallback: open default browser
  const start = process.platform === 'win32' ? 'cmd' : (process.platform === 'darwin' ? 'open' : 'xdg-open');
  execFile(start, [url]);
} catch(e){ console.error('Invalid URL', e); }
