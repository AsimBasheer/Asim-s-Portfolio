# Sentry Debugging Guide

## Current Setup
- ✅ DSN is configured in `.env.local`
- ✅ Sentry package is installed (`@sentry/nextjs@^10.32.1`)
- ✅ Configuration files are in place
- ⚠️ Using `--turbopack` flag (may cause issues)

## Steps to Debug

### 1. Restart Dev Server
```bash
# Stop the server (Ctrl+C) and restart
npm run dev
```

### 2. Check Browser Console
Open `http://localhost:3000/test-sentry` and check the console for:
- `🔵 Initializing Sentry with DSN: ...`
- `✅ Sentry client initialized successfully`
- `🔵 Sentry Client Event being sent: ...`

### 3. Check Network Tab
1. Open DevTools → Network tab
2. Filter by "sentry" or "ingest"
3. Click "Test Error Capture" button
4. Look for POST requests to `sentry.io` or `ingest.sentry.io`
5. Check the request:
   - Status should be 200
   - Request payload should contain event data

### 4. Try Without Turbopack
Turbopack might interfere with Sentry's webpack plugin. Try:
```bash
# Remove --turbopack flag temporarily
npm run dev
# Or modify package.json script to remove --turbopack
```

### 5. Verify Sentry Dashboard
- Go to: https://sentry.io/organizations/arfasoftech00/projects/javascript-nextjs/
- Check **Issues** tab (not Events)
- Events may take 10-30 seconds to appear
- Make sure you're viewing the correct project

### 6. Check for Ad Blockers
- Disable browser extensions (ad blockers, privacy tools)
- These might block requests to `sentry.io`

### 7. Verify DSN Format
Your DSN should look like:
```
https://[key]@[org].ingest.[region].sentry.io/[project-id]
```

## Common Issues

### Issue: No network requests
**Solution:** 
- Check if Sentry is initialized (console logs)
- Verify DSN is accessible in browser (check Network tab for failed requests)
- Try disabling Turbopack

### Issue: Network requests fail (4xx/5xx)
**Solution:**
- Verify DSN is correct
- Check Sentry project settings
- Ensure project is active

### Issue: Events sent but not in dashboard
**Solution:**
- Wait 10-30 seconds
- Check **Issues** tab, not Events
- Verify you're in the correct project
- Check Sentry project filters/settings

## Test Commands

Run these in browser console on test page:
```javascript
// Check if Sentry is available
console.log('Sentry:', typeof Sentry);

// Check DSN
console.log('DSN:', process.env.NEXT_PUBLIC_SENTRY_DSN);

// Test capture
Sentry.captureMessage('Manual test', 'info');

// Flush events
Sentry.flush(2000).then(() => console.log('Flushed'));
```

