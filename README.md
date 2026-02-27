# Uday Ghosh — Portfolio (GitHub Pages)

A modern, tech-forward, **static** portfolio website (HTML/CSS/JS).  
Designed for fast load, mobile-first layout, accessibility basics, and easy **free hosting** on GitHub Pages.

## Folder structure
```
uday-portfolio/
  index.html
  styles.css
  script.js
  assets/
    uday-convocation-garden.jpg
    uday-award-ceremony.png
    uday-convocation-stage.png
    UdayGhosh_CV.pdf   <-- add your resume here
```

## Local preview (no build needed)
Option 1 (simple): open `index.html` in your browser.

Option 2 (recommended): run a tiny local server:
- Python:
  ```bash
  cd uday-portfolio
  python -m http.server 8000
  ```
  Then open: `http://localhost:8000`

## Add your resume
Place your resume PDF at:
`assets/UdayGhosh_CV.pdf`

The “Download Resume” button already points to that path.

## Deploy FREE on GitHub Pages (recommended)
1. Create a new GitHub repository (public) — e.g. `portfolio`
2. Upload all files:
   - `index.html`, `styles.css`, `script.js`, and the entire `assets/` folder
   - Ensure `index.html` is in the **root** of the repo
3. Go to **Settings → Pages**
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
5. Save. GitHub will show your live URL, typically:
   - `https://<your-username>.github.io/portfolio/`

### Optional: Use your main profile URL
If you name the repo exactly: `<your-username>.github.io`, GitHub will host it at:
`https://<your-username>.github.io/`

## Custom domain (optional)
You can add a custom domain later from Settings → Pages.

## Notes
- No backend: the contact form opens an email draft via `mailto:`.
- Theme toggle stores preference in localStorage.
- All On2Cook descriptions are high-level and IP-safe.
