# CLAUDE.md

## Project Overview
A Teachers' Day celebration website — pure HTML/CSS/JS, no frameworks, no build tools. Deploy as static site on GitHub Pages.

## File Structure
- `index.html` — Main landing page (central badge with SVG floral wreath, teacher name cards, instruction section)
- `style.css` — All styles (~2200 lines), GPU-accelerated animations, responsive breakpoints
- `script.js` — All JS logic (~960 lines): teacher quiz data, particle effects, name card animation, modal system
- `teacher/` — 35 individual teacher profile HTML pages

## Key Architecture Details
- **Teacher quiz data**: Defined in `script.js` lines 7-31 as `teachers` array with name, color, question, answer, url, lang fields
- **Answer matching**: Uses `normalize()` function (line 34-39) that strips whitespace, punctuation, normalizes Chinese synonyms (与/及→和, 之→的)
- **Modal system**: Dynamically created in `initQuestionModal()` (line 63), exposed as `window.showQuestionModal`
- **Name card animation**: Circular orbit system with collision detection (100 attempt limit), GPU transforms via `translate3d`
- **Teacher mode**: Toggle button switches from orbital animation to CSS grid layout (3x4 grid)
- **Particle effects**: Bokeh, golden dust, floating particles, sparkles — all randomized on page load
- **Responsive**: Breakpoints at 480px (mobile) and 768px (tablet); adaptive particle counts

## Code Patterns
- All initialization wrapped in `DOMContentLoaded` listeners
- GPU acceleration: `translate3d`, `will-change`, `backface-visibility: hidden`
- Animation pauses on `visibilitychange` to hidden
- Debounced resize handler (250ms)
- No jQuery or external libraries

## Deployment
- Zero build step — just push to GitHub and enable Pages
- `.gitignore` excludes `node_modules/`, `package-lock.json`, screenshot PNGs
- `package.json` only has `playwright` dev dependency (for screenshot capture)

## Making Changes
- **Add teacher**: Add entry to `teachers` array in `script.js`, create HTML page in `teacher/`, add card in `index.html`
- **Modify quiz**: Edit `question`/`answer` in `script.js` teachers array
- **Style changes**: All in `style.css`, CSS variables at top for colors
- **Responsive**: Media queries at 480px and 768px in `style.css`
