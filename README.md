# Fernando Almeida — Premium BI Portfolio

Premium portfolio website for a Data Analyst / Business Intelligence profile.

## What changed in this version

- More executive and premium visual direction.
- No dashboard overlapping the profile photo.
- English by default, with EN/PT switch.
- Generalist business positioning: finance, operations, sales, CRM, reporting and management.
- Dashboard section focused on **Power BI** and **Looker Studio / Data Studio** examples.
- Each dashboard explains:
  - business use;
  - possible data sources;
  - decisions supported;
  - deliverable produced.
- Ready to replace mock previews with real embedded reports.

## Add profile photo

Place the profile image here:

```text
public/profile.jpg
```

The site automatically uses it. If no photo exists, it uses the placeholder.

## Add real Power BI or Looker Studio embeds

Open:

```text
src/reportEmbeds.js
```

Paste your real embed URLs:

```js
export const EMBED_URLS = {
  powerbiExecutive: 'PASTE_POWERBI_EMBED_URL_HERE',
  powerbiFinance: 'PASTE_POWERBI_EMBED_URL_HERE',
  lookerOperations: 'PASTE_LOOKER_STUDIO_EMBED_URL_HERE',
  lookerMarketing: 'PASTE_LOOKER_STUDIO_EMBED_URL_HERE'
}
```

If the URL is empty, the site shows the premium interactive mockup. If the URL is filled, the site displays the live report iframe.

## Local test

```powershell
npm install --no-audit --no-fund
npm run dev
```

## Build

```powershell
npm run build
```

## Publish update to GitHub Pages

Copy all files into the existing GitHub project folder and run:

```powershell
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm install --no-audit --no-fund
npm run build
git add .
git commit -m "Upgrade premium BI portfolio"
git push
```

Then open GitHub Actions and wait for the deployment to be green.
