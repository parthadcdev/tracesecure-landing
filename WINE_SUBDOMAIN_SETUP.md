# Wine Subdomain Setup (`wine.tracesecure.co`)

The app serves the Wine industry landing when:

- The hostname starts with `wine.` (e.g. `wine.tracesecure.co`), on `/`
- The path is `/industries/wine` on the main domain or localhost

## Firebase Hosting

1. Open [Firebase Console → Hosting](https://console.firebase.google.com/project/canvas-griffin-475520-b7/hosting) for project `canvas-griffin-475520-b7`.
2. Add custom domain `wine.tracesecure.co` to the same Hosting site that serves `tracesecure.co` (or a dedicated site if you split later).
3. Add the DNS records Firebase provides (typically `A`/`AAAA` or `CNAME` for the subdomain).
4. Wait for SSL provisioning to complete.

No code changes are required in `firebase.json` for SPA routing—the existing `** → /index.html` rewrite applies to the wine subdomain.

## Local development

- Generic homepage: `http://localhost:5173/`
- Wine industry page: `http://localhost:5173/industries/wine`
- To test hostname behavior locally, map `wine.localhost` in `/etc/hosts` or use a tunnel; the app checks `window.location.hostname.startsWith('wine.')`.

## Navigation

The **Industries → Wine** menu item links to:

- `https://wine.tracesecure.co` in production (main domain)
- `/industries/wine` on localhost
