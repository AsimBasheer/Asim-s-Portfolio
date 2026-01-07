# Fix Sentry 403 Error

## What is a 403 Error?
A 403 Forbidden error means Sentry rejected your request due to authentication/authorization issues.

## Quick Fix Steps

### 1. Get a Fresh DSN
1. Go to: https://sentry.io/settings/arfasoftech00/projects/javascript-nextjs/keys/
2. Find your **Client Keys (DSN)** section
3. Copy the **DSN** (it should look like: `https://xxxxx@o4504612753178624.ingest.us.sentry.io/4510663839645696`)
4. If you don't see any keys, click **"Create New Key"**

### 2. Update .env.local
Replace the DSN in your `.env.local` file:

```bash
NEXT_PUBLIC_SENTRY_DSN=https://YOUR_NEW_KEY@o4504612753178624.ingest.us.sentry.io/4510663839645696
SENTRY_DSN=https://YOUR_NEW_KEY@o4504612753178624.ingest.us.sentry.io/4510663839645696
```

**Important:** 
- Use the **same key** for both `NEXT_PUBLIC_SENTRY_DSN` and `SENTRY_DSN`
- Or use different keys if you created separate client/server keys (both must be valid)

### 3. Verify Project Settings
1. Go to: https://sentry.io/settings/arfasoftech00/projects/javascript-nextjs/
2. Check **Client Keys (DSN)** section
3. Make sure the key is **Active** and not revoked
4. Check **Rate Limits** - make sure you haven't exceeded limits

### 4. Restart Dev Server
```bash
# Stop server (Ctrl+C) and restart
npm run dev
```

### 5. Test Again
1. Go to `http://localhost:3000/test-sentry`
2. Click "Test Error Capture"
3. Check browser console - should NOT see 403 error
4. Check Network tab - request should return 200 status

## Common Causes

1. **Invalid DSN Key**: Key was revoked or doesn't exist
2. **Wrong Project ID**: DSN points to wrong project
3. **Expired Key**: Key expired (unlikely but possible)
4. **Rate Limiting**: Too many requests (check Sentry dashboard)
5. **Organization Mismatch**: DSN belongs to different org

## Verify DSN Format

Your DSN should match this format:
```
https://[KEY]@[ORG].ingest.[REGION].sentry.io/[PROJECT_ID]
```

Example:
```
https://ac932fc1fcc897c78a6e49b66e35af1f@o4504612753178624.ingest.us.sentry.io/4510663839645696
```

Where:
- `ac932fc1fcc897c78a6e49b66e35af1f` = Your key
- `o4504612753178624` = Organization ID
- `us` = Region
- `4510663839645696` = Project ID

## Still Getting 403?

1. **Create a new key** in Sentry dashboard
2. **Delete old key** if it exists
3. **Update .env.local** with new DSN
4. **Restart dev server**
5. **Clear browser cache** and test again

## Check Sentry Dashboard

After fixing, verify events are arriving:
- Go to: https://sentry.io/organizations/arfasoftech00/projects/javascript-nextjs/
- Check **Issues** tab
- Events should appear within 10-30 seconds

