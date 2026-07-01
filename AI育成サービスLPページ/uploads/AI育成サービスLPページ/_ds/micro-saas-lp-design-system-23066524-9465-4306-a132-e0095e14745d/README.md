# Cadence — Micro SaaS LP Design System

A design system for building **premium, bilingual (日本語 / English) micro-SaaS service-introduction landing pages**. The aesthetic is calm and editorial — inspired by the restraint of [lexus.jp](https://lexus.jp/): generous whitespace, refined minimal typography, **sharp squared corners**, a warm near-monochrome palette, and slow, eased motion. Light-dominant surfaces with dark "ink" sections for rhythm.

> **Cadence** is the placeholder brand used throughout this system. Swap the logo, copy, and product imagery to fit a real product — the foundations and components stay the same.

## Sources

- **GitHub repo (intended primary source):** `tame0522works-art/micro-saas` — *not accessible at build time* (the GitHub App install did not grant read access, or the owner/name differs). This system was therefore built from the brief + the lexus.jp visual reference, **not** from the repo. If you can read the repo, explore it to align components and copy more precisely: https://github.com/tame0522works-art/micro-saas
- **Visual reference:** https://lexus.jp/ — borrowed: generous whitespace, refined minimal type, dark premium palette, subtle slow motion, sharp (non-rounded) corners.
- **Brand font (uploaded):** Noto Sans JP (variable) — self-hosted at `fonts/NotoSansJP-VariableFont_wght.ttf`.

---

## Content fundamentals

**Voice — quiet confidence.** Copy is calm, plain, and assured. It sells *less noise*, not *more features*. Short declarative lines; no hype, no exclamation walls, minimal adjectives.

- **Bilingual.** Every string exists in Japanese and English (`ui_kits/microsaas-lp/copy.jsx`). JP is the default. JP body runs looser (`line-height 1.72`) than EN.
- **Person.** Speaks *to* the team ("your team's work" / 「チームの仕事に」). Warm but not chummy; never first-person "we" heavy.
- **Casing.** EN headlines use sentence case, not Title Case ("A calm rhythm for your team's work."). Mono eyebrows/labels are UPPERCASE with wide tracking.
- **Numbers as proof, sparingly.** A single proof bar (uptime, companies, setup time, rating). No stat-soup.
- **No emoji.** Iconography is thin-stroke line icons only.
- **Examples.**
  - JP hero: 「チームの仕事に、静かなリズムを。」
  - EN hero: "A calm rhythm for your team's work."
  - JP CTA: 「14日間無料で試す」 · note 「クレジットカード不要 · いつでも解約可能」
  - Section eyebrows: `01 — Features` / 「01　特長」

---

## Visual foundations

**Palette.** Warm-neutral and near-monochrome. The system runs almost entirely on a **stone ramp** (`--stone-0` paper-white → `--stone-950` ink). Color appears only as a **champagne metallic accent** (`--accent-400 #c4ad7e`) used very sparingly — a tag, a checkmark, a section index — never as a fill behind large areas. Semantic status colors are muted (sage, ochre, terracotta, slate), never saturated. Default page surface is warm paper `--stone-50 #faf9f7`; dark sections use `--stone-950 #0a0a09`.

**Theme modes.** Three: **light** (default, warm paper + ink), **dark** (warm near-black surfaces, light ink), and **terminal** (green phosphor CRT — *"how an AI sees the site"*, 昔のPCの緑色しか出てこない画面: monospace everywhere, green-on-black, scanlines, soft glow, a faint flicker). Set the active theme by writing `data-theme="light|dark|terminal"` on `<html>` — every component re-themes automatically because they reference **semantic aliases** (`--surface-*`, `--text-*`, `--border-*`, `--action-*`, `--fill-*`), never raw ramp values. Light defaults live in `tokens/colors.css`; dark + terminal overrides (and the terminal CRT effects) live in `tokens/themes.css`, imported last so `:root[data-theme="…"]` reliably wins. The kit nav carries a 3-way toggle (sun / moon / terminal) persisted to `localStorage` (`cadence-theme`), and an inline `<script>` in each page sets the attribute before first paint to avoid a flash. Helper API: `useTheme()`, `setTheme(name)`, `getTheme()`, `THEMES` (`helpers.jsx`).

**Responsive.** Fluid throughout. Type scales via `clamp()` and tightens further under 640px; gutters/section rhythm flex via `--gutter` / `--section-y`. Breakpoints: **960px** — nav collapses to a hamburger sheet (links + lang + sign-in + CTA inside a slide-down panel), the showcase / pricing / testimonials grids go single-column, and the **split hero stacks** (image above text); **640px** — feature grid single-column, proof + footer reflow to 2→1 columns, display type steps down. Verified at phone (390px), tablet (768px) and desktop widths.

**Hero / main-visual layouts.** The hero supports four switchable patterns via a Tweak (`heroLayout`), inspired by bold JP corporate/recruit main visuals (original compositions): `fullbleed` (image fills behind a centered title + scrim — background-behind-title), `overlay` (image fills, title anchored bottom-left, editorial), `split-right` and `split-left` (title on the page surface beside a contained image panel — image-to-the-side). One `#hero-visual` image slot is reused across all layouts so a dropped image persists when switching. In `fullbleed` / `overlay` the hero is a dark cinematic band with light text and the nav floats light over it; in the `split` layouts the title sits on the page surface with theme-colored text and a normal nav. Terminal mode shows **no** photographic image in any layout — the green phosphor band / CRT mockup stands in.

**Typography.** Three families:
- **Display** — `Schibsted Grotesk`, used at **light (300)** weight, large, with tight tracking (`-0.02em`) for headlines.
- **Body & Japanese** — `Noto Sans JP` (self-hosted variable), 400, generous line-height.
- **Labels / eyebrows / specs** — `Space Mono`, uppercase, wide tracking (`0.18em`).

Headlines are large and quiet; the contrast comes from *scale + weight*, not color.

**Backgrounds.** Flat surfaces — **no gradients** behind content (the only gradient is a subtle fade grounding the hero mockup). No textures, no patterns, no decorative illustration. Imagery, when present, is a clean product UI mockup (or a user-supplied photo); photography direction would be warm and desaturated, never busy.

**Corners.** Squared. Radii are near-zero (`--radius-md` = 4px is the max for surfaces; `--radius-xs` = 2px for tags). Pills are reserved for avatars only. This is the most distinctive visual rule — **almost nothing is round.**

**Borders & hairlines.** 1px hairlines do most of the structural work (`--border-subtle` on light, `rgba(244,242,237,0.14)` on dark). Cards are defined by a hairline + a very soft shadow, not heavy elevation.

**Shadows.** Soft, low, warm-tinted (`rgba(20,19,18,…)`), restrained. `--shadow-sm` for resting cards, `--shadow-lg` for the hero mockup and featured pricing card. Dark surfaces use a deeper `--shadow-on-dark`.

**Motion.** Slow and eased, **never bouncy**. Easing is `cubic-bezier(0.22,0.61,0.36,1)` (out) and a symmetric in-out for moves. Durations 180–900ms. Sections lift in on scroll (`translateY(22px)` → 0, fade) — but the **base state is always visible**, so the animation is a pure enhancement (safe for capture, print, and `prefers-reduced-motion`).

**Hover / press.** Hover = subtle background shift (solid buttons darken to `--action-solid-hover`; outline/ghost fill with `--surface-alt`; cards lift `-4px`). Press = a 1px downward nudge. Links underline. No color-flips to bright hues.

**Transparency & blur.** Used once, deliberately: the sticky nav gains `backdrop-filter: blur(14px)` + 82%-opacity paper background only after the page scrolls.

**Layout.** Centered, max-width `1240px` (narrow `760px` for FAQ/CTA). Fluid gutters and section rhythm via `--gutter` / `--section-y`. The nav is the only fixed/sticky element.

---

## Iconography

- **System:** [Lucide](https://lucide.dev) (CDN: `unpkg.com/lucide`). Chosen for its **thin 1.5px stroke** and clean geometric joins, which match the premium-minimal feel. **This is a substitution** — the source repo's own icon set was not accessible; swap to the real set if/when the repo is available.
- **Usage:** line icons only, `stroke-width: 1.5`, `currentColor` so they inherit text color. Sized 14–28px. Wrapped by the `Icon` helper (`helpers.jsx`) which renders a `data-lucide` node and calls `lucide.createIcons()`.
- **No emoji. No Unicode glyph icons.** The only "glyph" used as UI is the mono `+` in the FAQ accordion (rotates to `×`).
- **Brand marks:** Lucide dropped brand icons (github/twitter/linkedin), so social links in the footer are **text links** (`X · GitHub · LinkedIn`), not icons.
- **Logo:** `assets/logo-cadence.svg` (wordmark + a 3-bar "rhythm" mark) and `assets/mark-cadence.svg` (mark only). Both use `currentColor` so they invert cleanly on dark surfaces.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this one file). `@import` list only.
- `tokens/` — `fonts.css` (`@font-face` + Google Fonts), `colors.css`, `typography.css`, `spacing.css` (spacing/radii/shadows/layout/motion), `base.css` (element defaults).
- `fonts/` — `NotoSansJP-VariableFont_wght.ttf`.
- `assets/` — `logo-cadence.svg`, `mark-cadence.svg`.
- `README.md` (this file), `SKILL.md`.

**Components** (`window.<Namespace>.<Name>` once compiled)
- `components/core/` — **Button**, **Card**, **Input**, **Tag**
- `components/feedback/` — **Accordion**
- `components/data/** — **Stat**

Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`; each directory has one `@dsCard` HTML.

**UI kit**
- `ui_kits/microsaas-lp/` — full bilingual landing page (`index.html` + section JSX). See its `README.md`.

**Template** (consumer starting point — shows in the **Templates** picker)
- `templates/microsaas-lp/` — the same LP, self-contained and bound to the DS via `ds-base.js`. Copy this folder to start a new page. See its `README.md`.

**Foundation cards** (Design System tab) — `guidelines/`: Type (display/body/labels), Colors (neutrals/accent/semantic/surfaces), Spacing (scale/radii/shadows/motion), Brand (logo/iconography).

---

### Caveats
- Built **without** the `tame0522works-art/micro-saas` repo (inaccessible at build time). Components, copy, and exact brand are best-guess interpretations of the brief + lexus.jp reference.
- **Cadence** is a placeholder brand; the logo is a simple authored wordmark.
- **Lucide** icons substitute for the unknown source icon set.
