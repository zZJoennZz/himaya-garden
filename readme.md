# Himaya Garden

Official website for **Himaya Garden** — a private garden venue in midtown Tucson for weddings, retreats, high tea, and meaningful gatherings.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

**Live site:** [https://himayagarden.com](https://himayagarden.com)

---

## Features

- Static site generation with Astro
- Utility-first styling with Tailwind CSS v4
- Pages for home, about, events, gallery, contact, and privacy policies
- Reusable components (Header, Footer, Event cards/calendar, Google Reviews)
- Configured for production at `https://himayagarden.com`

---

## Tech Stack

| Technology   | Version / Notes      |
|-------------|----------------------|
| Astro       | ^6.4.6               |
| Tailwind CSS| ^4.3.1 (via Vite plugin) |
| Node.js     | 18+ recommended      |
| Package manager | npm (lockfile included) |

---

## Prerequisites

- [Node.js](https://nodejs.org/) **18** or later (LTS recommended)
- npm (comes with Node)

Check your versions:

```bash
node -v
npm -v
```

---

## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/zZJoennZz/himaya-garden.git
   cd himaya-garden
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This installs Astro, Tailwind CSS, and other project dependencies from `package-lock.json`.

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The site will be available at [http://localhost:4321](http://localhost:4321) (default Astro port).

---

## Available Scripts

| Command           | Description                                      |
|-------------------|--------------------------------------------------|
| `npm run dev`     | Start local development server with hot reload   |
| `npm run build`   | Build production-ready static site into `dist/`  |
| `npm run preview` | Preview the production build locally             |

### Build for production

```bash
npm run build
```

Output is written to the `dist/` folder. You can preview it with:

```bash
npm run preview
```

---

## Project Structure

```
himaya-garden/
├── public/                 # Static assets (served as-is)
├── img/                    # Image assets
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── EventCalendar.astro
│   │   ├── EventCard.astro
│   │   ├── EventList.astro
│   │   ├── Footer.astro
│   │   ├── GoogleReviews.astro
│   │   └── Header.astro
│   ├── data/               # Site data / content
│   ├── layouts/            # Page layouts
│   ├── pages/              # File-based routes
│   │   ├── index.astro
│   │   ├── about-us.astro
│   │   ├── contact.astro
│   │   ├── events.astro
│   │   ├── gallery.astro
│   │   └── ...
│   └── styles/             # Global styles
├── astro.config.mjs        # Astro + Tailwind Vite config
├── package.json
├── tsconfig.json
└── README.md
```

---

## Configuration

Site URL and Tailwind are set in `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://himayagarden.com',
  vite: {
    plugins: [tailwindcss()]
  }
});
```

TypeScript uses Astro's strict config (`tsconfig.json`).

---

## Deployment

The project builds to static files in `dist/`, so it can be deployed to any static host, for example:

- **Netlify** / **Vercel** / **Cloudflare Pages** — connect the repo and set the build command to `npm run build` and the publish directory to `dist`
- **GitHub Pages** — use the `dist` output with a suitable action or static deploy setup
- Any traditional web server that serves static HTML/CSS/JS

Ensure the production domain matches (or update) the `site` value in `astro.config.mjs` if needed for canonical URLs and sitemap generation.

---

## Development Tips

- Edit pages under `src/pages/` — file names map directly to routes (e.g. `about-us.astro` → `/about-us`).
- Shared UI lives in `src/components/`.
- Prefer Tailwind utility classes; global styles go in `src/styles/`.
- After changing dependencies, commit the updated `package-lock.json`.

---

## License

ISC © [zZJoennZz](https://github.com/zZJoennZz)

---

## Contact / Venue

**Himaya Garden**  
Midtown Tucson, Arizona  

Website: [himayagarden.com](https://himayagarden.com)