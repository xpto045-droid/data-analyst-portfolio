# Fernando Almeida, Premium BI Portfolio, v6

This version adds a broader decision-support section so the portfolio is not only focused on dashboards.

Included:

- Power BI and Data Studio dashboard examples
- compact premium layout
- English and Portuguese switch
- experience presented without employer names or dates
- new section for decision reports, risk analysis, KPI diagnostics, business cases, operational reviews and executive summaries
- prebuilt `dist` folder and simplified GitHub Pages workflow

## Profile photo

Place your real photo in:

`public/profile.jpg`

If no photo is available, the site falls back to `public/profile-placeholder.svg`.

## Publish to GitHub

Because the workflow publishes the prebuilt `dist` folder, build first and then push:

```bash
npm install
npm run build
git add .
git add -f dist
git commit -m "Add decision support section"
git push
```
