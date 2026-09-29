# Neo-Brutalist Theme & Design Choices

This document outlines the core design language, CSS variables, color palettes, and component styles used across our neo-brutalist web projects (e.g., `jimiroi`, `not-my-portfolio`, `PiYak`). It serves as a single source of truth for LLMs or developers to easily understand and replicate the consistent theme across different codebases.

## 1. Core Principles
- **High Contrast & Sharp Edges:** No rounded corners (`border-radius: 0`). Use thick, solid borders (4px to 6px) to delineate elements.
- **Harsh Shadows:** Drop shadows are solid and unblurred (e.g., `4px 4px 0px 0px black`), creating a 2D pop-out effect instead of realistic depth.
- **Chaotic Energy:** Use overlapping elements, infinite marquees, glitch effects, and raw cursors (like `crosshair` or `grab`).
- **Typography:** Bold, uppercase sans-serifs (like *Inter* or *Space Grotesk*) mixed with handwritten markers (*Permanent Marker*). Tight letter spacing.

## 2. Color Palette (Cyber-Brutalist)
*Note: We strictly use the high-octane RGB/Hex palette below for the core theme (derived from jimiroi and not-my-portfolio). Do not use the alternative palettes (like the orange/cyan from the github.io project).*

```css
:root {
  --bg-void: #111111;       /* Deep space black / Main Background */
  --white-pure: #ffffff;    /* Pure white / Main Text & Backgrounds */
  --black-pure: #000000;    /* Pure black / Thick Borders */
  
  /* Accent Colors */
  --cyan-pierce: #00ffff;   /* Cyber Cyan */
  --pink-scream: #ff00ff;   /* Hot Magenta/Pink */
  --yellow-hazard: #ffff00; /* Hazard Yellow */
}
```
**Background Variations:** The body background is typically solid `--bg-void`. It can optionally include a radial-gradient dotted grid pattern (graph-paper look) using semi-transparent accent colors.

## 3. Shadows & Borders
Shadows are flat, solid, and often use accent colors to create visual noise.

```css
:root {
  --border-thick: 4px solid var(--white-pure);
  --border-thicker: 6px solid var(--black-pure);
  
  --shadow-brutal-cyan: 6px 6px 0px var(--cyan-pierce);
  --shadow-brutal-pink: 6px 6px 0px var(--pink-scream);
  --shadow-brutal-yellow: 6px 6px 0px var(--yellow-hazard);
  --shadow-brutal-black: 8px 8px 0px var(--black-pure);
}
```

## 4. Sticker Style
The "Sticker" component is an interactive element that mimics physical, slap-on stickers.
- **Container:** Thick black border (6px), white background, black text.
- **Cursor:** `grab` (changes to `grabbing` on active).
- **Shadow:** Hard offset shadow (8px 8px) in an accent color (pink, cyan, or yellow).
- **Hover State:** Background turns yellow, shadow extends further (e.g., `12px 12px 0px`).
- **Inner Images:** If a sticker contains an image, the image itself gets a 4px solid black border and white background.

```css
.sticker {
  border: 6px solid var(--black-pure);
  background-color: var(--white-pure);
  color: var(--black-pure);
  padding: 1rem 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: grab;
  box-shadow: 8px 8px 0px var(--pink-scream); /* Variant: cyan or yellow */
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.sticker:hover {
  background-color: var(--yellow-hazard);
  box-shadow: 12px 12px 0px var(--pink-scream);
}

.sticker img {
  border: 4px solid var(--black-pure);
  background: var(--white-pure);
}
```

## 5. Animations & Effects
### Text Glitch
Text layers duplicated via `text-shadow` in opposing accent colors (Cyan and Pink) to create an anaglyph 3D effect.
```css
.header-title {
  text-shadow: 10px 10px 0px var(--pink-scream), -10px -10px 0px var(--cyan-pierce);
}
```
Animated glitch effects shift the translation and text-shadow rapidly on a loop or hover.

### Brutal Shake
Interactive boxes (`.brutal-box`) or buttons shake violently on hover to encourage interaction.
```css
@keyframes brutal-shake {
  0% { transform: translate(2px, 2px) rotate(0deg); }
  25% { transform: translate(-2px, -1px) rotate(-1deg); }
  50% { transform: translate(1px, 2px) rotate(1deg); }
  75% { transform: translate(-1px, -2px) rotate(0deg); }
  100% { transform: translate(2px, 2px) rotate(-1deg); }
}

.brutal-box:hover {
  animation: brutal-shake 0.3s infinite;
}
```

### Chaos Marquee
A full-width, slightly rotated banner with a solid accent background (e.g., yellow or pink) that scrolls infinitely. Often positioned fixed to the viewport with `mix-blend-mode: difference` for added chaos.
