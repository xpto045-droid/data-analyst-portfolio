# Fernando Almeida, Premium BI Portfolio, v4

This version includes:

- the new Power BI dashboard image on the site
- the new Data Studio dashboard image on the site
- experience copy without dates or job titles
- wording updated to use commas instead of em dashes
- prebuilt `dist` folder and simplified GitHub Pages workflow

## Profile photo

Place your real photo in:

`public/profile.jpg`

If no photo is available, the site falls back to `public/profile-placeholder.svg`.

## Local preview

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publish to GitHub

Because the workflow publishes the prebuilt `dist` folder, build first and then push:

```bash
npm run build
git add .
git add -f dist
git commit -m "Update portfolio"
git push
```
