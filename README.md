# ankithasudarshan.github.io

Personal academic website: a single static HTML page, no build step, no framework.
Styled after minimal PhD sites.

```
index.html              all content lives here, edit this to update the site
assets/css/style.css    styling (light + dark, responsive)
assets/js/main.js        mobile nav, "show more" news, section highlight
assets/img/             profile photo, publication thumbnails, favicon, badges
assets/pdf/             CV
```

Deployed as a GitHub Pages user site at **https://ankithasudarshan.github.io/**
(source: `main` branch, `/` root). Every push updates it.
Preview locally: open `index.html`, or run `python -m http.server` in this folder.

## Placeholders still to fill

Search `index.html` for `data-needs`:

| marker | what to do |
|---|---|
| `data-needs="visitor-globe"` | Get a free 3D globe embed from <https://www.revolvermaps.com/> and replace the placeholder `<script src="//rf.revolvermaps.com/...i=PLACEHOLDER...">` in the `#visitors` section with the real one. |
| `data-needs="link"` (x2) | On `#pub-transition` and `#pub-motionrepr`, swap `paper soon` for the arXiv / OpenReview link once each paper is public. |

Nice-to-have later:
- Real teaser images for `#pub-transition`, `#pub-rhythm`, `#pub-patent` (currently
  clean text tiles). Add to `assets/img/` and replace the
  `<div class="pub__thumb pub__thumb--placeholder">...</div>` with
  `<div class="pub__thumb"><img src="assets/img/xxx.webp" alt="..." loading="lazy"></div>`.
- Replace `assets/pdf/Ankitha_Sudarshan_CV.pdf` whenever the CV changes.

## Adding a publication

Copy an `<li class="pub" id="...">` block in `index.html`, change the id / title /
authors (keep your name in `<strong>`) / venue / blurb / links. Newest first.
Use `<span class="hl">...</span>` to highlight a key result, and the
`<span class="tag">under review</span>` chip for unaccepted work.
No em dashes anywhere: use commas, hyphens, or "&middot;".
