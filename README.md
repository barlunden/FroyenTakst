
# Frøyen Takst – Nettside (Astro + Tailwind v4)

Dette er nettsida til Frøyen Takst, bygd med **Astro** for optimal yteevne og **Tailwind CSS v4** for eit moderne designsystem.

## 🛠 Teknologi
- **Rammeverk:** [Astro](https://astro.build/)
- **Styling:** Tailwind CSS v4 (hybridløysing med utility-klassar og reine CSS-komponentar)
- **Innhald:** Markdown (.md) via Astro Content Collections
- **Ikon:** SVG / Bootstrap Icons

## 📁 Prosjektstruktur

```text
/
├── public/
│   └── images/          # Alle bilete (jpg, webp, png)
├── src/
│   ├── components/      # Gjenbrukbare komponentar (NavBar, Footer, MSP, etc.)
│   ├── content/         # Markdown-filer (Tenester og FAQ)
│   │   ├── tjenester/
│   │   └── faq/
│   ├── layouts/         # Hovudmal for alle sider
│   ├── pages/           # Router (index, kontakt, tjenester)
│   └── styles/
│       └── global.css   # Sentrale design-tokens og reine CSS-komponentar
└── astro.config.mjs
```
## Designsystem & Styling
For å sikre stabilitet i Tailwind v4 har vi valt følgjande arkitektur:

- **Design Tokens:** Fargar som --color-primary (#0f3b66) og --color-accent (#e4a11b) er definerte i @theme-blokka i global.css.
- **Reine CSS-komponentar:** For å unngå kompileringsfeil med @apply i v4, er komplekse element som korta (.card-base, .card-interactive) og knappar (.btn-primary) definerte med standard CSS.
- **Typography:** Vi brukar @tailwindcss/typography (prose), men nyttar klassen not-prose på våre eigne boks-komponentar for å unngå stil-konfliktar.
## ✍️ Innhaldshandtering
### Legge til nye tenester
Nye tenester blir automatisk genererte ved å legge til ei .md-fil i src/content/tjenester/.
Eksempel på Frontmatter:
Markdown
---
title: "Namn på tenesta"
description: "Kort tekst for oversiktssida"
heroImage: "/images/bilete.webp"
order: 1
---


## 🚀 Kommandoar
Kommando        Handling
npm install     Installerer avhengigheiter
npm run dev     Startar lokal utviklingsserver (localhost:4321)
npm run build   Bygger sida for produksjon (dist/)
npm run preview Forhandsviser produksjonsbygget lokalt

## 📸 Retningslinjer for bilete
**Format:** Bruk .webp der det er mogleg for raskare lasting.
**Storleik:** Skaler ned store bilete før dei blir lagde i public/images/ (maks 1200-1600px breidde).**Alt-tekst:** Hugs alltid å legge til skildrande tekst for universell utforming og SEO.
---

