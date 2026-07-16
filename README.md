# 🎓 Teachers' Day Celebration | 教师节庆祝网页

A premium, animated tribute website celebrating Teachers' Day with multi-language support (Malay, Chinese, English). Features a beautiful central badge with floral wreath, animated teacher name cards, and personalized teacher profile pages with quiz gates.

## Features

- **Stunning Visual Effects**: Bokeh, golden dust, floating particles, sparkles, light rays, and ambient lighting — all GPU-accelerated for 60 FPS
- **Animated Wreath**: SVG-based floral wreath with peonies, cherry blossoms, olive branches, and golden berries
- **Teacher Name Cards**: Random appearance system with collision detection, smooth movement, and hover glow effects
- **Quiz Gate System**: Each teacher has a unique question; correct answer unlocks their personalized page
- **Teacher Mode**: Special grid layout for teachers to easily access their pages
- **Fully Responsive**: Optimized for desktop, tablet, and mobile with reduced motion support
- **Multi-language**: Malay, Chinese, and English content throughout
- **Accessibility**: Keyboard navigation, focus styles, reduced motion, high contrast mode

## Project Structure

```
├── index.html          # Main landing page
├── style.css           # All styles (2200+ lines)
├── script.js           # All animations and interactions
├── teacher/            # Individual teacher profile pages (35 pages)
│   ├── cikgu-rizan.html
│   ├── zhan-jinfeng.html
│   ├── ...
│   └── ...
├── .gitignore
└── README.md
```

## Tech Stack

- **Pure HTML/CSS/JavaScript** — no frameworks, no build tools
- **CSS Animations** — GPU-accelerated with `translate3d`, `will-change`, `backface-visibility`
- **SVG** — Floral wreath and decorative elements
- **Google Fonts** — Cormorant Garamond, Dancing Script, Great Vibes, Playfair Display, Noto Serif SC

## Deployment (GitHub Pages)

### Quick Deploy

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select your branch (e.g., `main`) and `/ (root)` folder, then click **Save**
5. Your site will be live at `https://<username>.github.io/<repo-name>/`

### Alternative: Netlify / Vercel

Drag and drop the project folder onto [Netlify Drop](https://app.netlify.com/drop) for instant deployment.

## Local Development

No build step required. Just open `index.html` in a browser.

> ⚠️ For best results, use a local server to avoid CORS issues with fonts:
> ```bash
> # Using Python
> python -m http.server 8000
> 
> # Using Node.js
> npx serve
> ```

## Teacher Quiz Data

Each teacher has a unique question and answer defined in `script.js`:

| Teacher | Subject | Sample Question |
|---------|---------|----------------|
| Cikgu Rizan | Malay | Kata hubung terbahagi kepada berapa jenis? |
| 詹晋沣老师 | Physics | 真空中的光速是多少 m/s？ |
| 林淑娟老师 | Math | π 的前两位小数是多少？ |
| Mrs. Vatsala | English | How many letters are there in the English alphabet? |
| ... | ... | ... |

Full teacher list: 23 teachers in `teachers` array in `script.js` (line 7-31).

## Browser Support

- Chrome / Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Zero dependencies — no npm install needed
- GPU-accelerated animations
- Adaptive particle count based on screen size
- Animation pauses when page is hidden (visibility API)
- Reduced motion respected for accessibility

## License

Made with ❤️ for Teachers' Day 2025
