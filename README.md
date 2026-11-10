# UYMS 2026

Site of the UYMS 2026 software engineering symposium (Muğla Sıtkı Koçman University), live at https://uyms26.github.io. React + Vite, Tailwind v4, react-router (`HashRouter`, so every page works on GitHub Pages without a server), Leaflet for the venue map.

- Each page is one file in `src/pages/` (Anasayfa, Kayıt, Bildiri Çağrısı, Program, Komiteler, Ulaşım, Konaklama, İletişim...), routed in `src/AppRouter.jsx`.
- Images are in `src/assets/` (webp, max 1920 px wide); the abstract booklet PDF is in `public/`.
- The contact form opens the visitor's mail app addressed to uyms26@mu.edu.tr.

## Run it

```bash
npm install
npm run dev
npm test
npm run build
npm run deploy   # builds and pushes dist/ to the gh-pages branch
```
