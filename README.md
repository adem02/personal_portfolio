# almahtech — Personal Portfolio

My personal portfolio, built to showcase my projects, experience and approach to software development.

Live at → **[almahtec.com](https://www.almahtec.com)**

---

## Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | react-icons |
| Build | Vite |
| Deployment | Vercel |

---

## Features

- **Projects section** — gallery with thumbnail switching, fullscreen lightbox and keyboard navigation
- **Animations** — entrance animations on scroll throughout all sections
- **Responsive** — mobile-first layout, works on any screen size
- **Custom favicon** — branded tab icon

---

## Project structure

```
src/
├── assets/          # Images, GIFs, logo
├── components/      # UI sections (Hero, About, Projects, Experience…)
│   ├── projects/    # ProjectCard, ProjectPreview, ProjectLightbox
│   └── UI/          # Navbar, Section, SectionTitle
├── constants/       # Data (projects, experiences, formations…) + types
├── hooks/           # Custom hooks (useProjects)
└── utils/           # Shared utilities
```

---

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build   # production build
npm run preview # preview production build
```
