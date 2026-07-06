# Fernando Almeida — Data Analyst Portfolio

Premium React/Vite portfolio with bilingual EN/PT content and interactive dashboard mockups inspired by Power BI and Looker Studio/Data Studio.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publish to GitHub Pages

Copy these files into your existing repository folder, then run:

```bash
git add .
git commit -m "Upgrade executive portfolio"
git push
```

Then check GitHub > Actions and wait for the deployment to complete.

## Add a real profile photo

Add a square or portrait image to:

```text
public/profile.jpg
```

Then open `src/App.jsx` and change:

```js
photo: './profile-placeholder.svg'
```

to:

```js
photo: './profile.jpg'
```

## Real Power BI / Looker Studio embeds

The dashboard area currently uses interactive mockups so the portfolio works without external accounts or private data. To embed real dashboards later, replace the mockup area with public iframe/embed links from Power BI Publish to web or Looker Studio Embed report.
