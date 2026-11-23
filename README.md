# Dawson Conlon · Portfolio

Static site (HTML + CSS + vanilla JS). No build step, so GitHub Pages serves it as-is.

## Edit content
All text lives in `content.js`. The experience and project bullets are copied verbatim from
`cv/master_resume_projects.json` and `01-candidate-profile.md` in the job-search workspace.
Keep every number identical to those sources.

- New project: add an object to `projects` (featured) or `more` (small GitHub cards).
- Categories for the filter buttons: `ml`, `sql`, `analytics`, `health`, `ag`.
- Résumé download: replace `assets/Dawson-Conlon-Resume.pdf` (public version, no phone number).

## Preview locally
```bash
python3 -m http.server 8765 -d portfolio
# open http://localhost:8765
```

## Deploy
This folder is its own git repo, pushed to `DawsonConlon/DawsonConlon.github.io`
(ignored by the parent ai-job-search repo).
```bash
cd portfolio && git add -A && git commit -m "Update portfolio" && git push
```
The site updates at https://dawsonconlon.github.io within a minute or two.
