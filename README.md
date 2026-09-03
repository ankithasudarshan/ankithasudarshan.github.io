# ankithasudarshan.github.io

Personal academic website — a single static HTML page, no build step, no framework.
Styled after minimal PhD sites (Minimal Light / academic single-page).

```
index.html              all content lives here — edit this to update the site
assets/css/style.css    styling (light + dark, responsive)
assets/js/main.js        mobile nav, "show more" news, section highlight
assets/img/             profile photo, publication thumbnails, favicon
assets/pdf/             CV
```

## Deploy (one time)

1. Create a **public** repo named exactly **`ankithasudarshan.github.io`** on GitHub
   (empty — no README/license). The name must match your username; that makes it a
   *user site* served at `https://ankithasudarshan.github.io/`.
2. From this folder:
   ```bash
   git init
   git add -A
   git commit -m "Personal website"
   git branch -M main
   git remote add origin https://github.com/ankithasudarshan/ankithasudarshan.github.io.git
   git push -u origin main
   ```
3. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / `/ (root)` → Save.
4. Live in ~1 minute at `https://ankithasudarshan.github.io/`. Every push updates it.

Preview locally: just open `index.html` in a browser, or `python -m http.server` in this folder.

## What still needs your input

Search `index.html` for `data-needs="..."` — every link marked that way is a placeholder:

| Placeholder | What to put |
|---|---|
| `data-needs="scholar"` | Your Google Scholar profile URL (or delete these `<li>`/links if you don't have one yet) |
| `data-needs="linkedin"` | Your LinkedIn profile URL |
| `data-needs="link"` (in publications) | arXiv / PDF / OpenReview links as papers go public |

Also:
- **Profile photo** — drop a square headshot at `assets/img/profile.jpg` and change
  `assets/img/profile.svg` → `assets/img/profile.jpg` in `index.html` (one line in the hero).
- **Publication thumbnails** — `pub-transition`, `pub-rhythm`, `pub-asr`, `pub-patent` use
  text placeholders. Add a teaser image to `assets/img/` and swap the
  `<div class="pub__thumb pub__thumb--placeholder">…</div>` for
  `<div class="pub__thumb"><img src="assets/img/xxx.webp" alt="…" loading="lazy"></div>`.
- **News dates** — I approximated years from your CV. Correct any that are wrong, and add
  new items at the top of the `<ul class="news">` list.
- **CV** — `assets/pdf/Ankitha_Sudarshan_CV.pdf` is a copy of your résumé; replace it
  whenever you update the real one.

## Adding a publication

Copy one `<li class="pub" id="…">` block in `index.html`, change the id, title, authors
(keep your name in `<strong>`), venue, blurb, and links. Newest first.
