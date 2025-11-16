# Personal Website

A modern, sleek personal website showcasing skills and personality with a dark, futuristic aesthetic. Built with React, TypeScript, Tailwind CSS, and ShadCN/UI.

## Tech Stack

- **React 18+** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Framer Motion** - Animations
- **ShadCN/UI** - Component library

## Design

- **Dark mode first** with blue-green cyber aesthetic
- **Tech-forward** futuristic design
- **Interactive** with smooth animations and hover effects
- See `../BRANDING_GUIDE.md` for complete brand guidelines

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # ShadCN components
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections
│   └── common/          # Reusable components
├── pages/               # Route pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utilities
├── data/                # Static data
└── styles/              # Global styles
```

## Pages

- **Home** - Hero section with animated introduction
- **About** - Story, skills, and journey
- **Projects** - Portfolio showcase
- **Contact** - Contact form and social links

## Brand Colors

- Background Primary: `#0a0e27` (Deep space blue)
- Accent Primary: `#0ea5e9` (Cyan blue)
- Accent Secondary: `#06b6d4` (Bright cyan)
- Accent Tertiary: `#14b8a6` (Teal)

See `../BRANDING_GUIDE.md` for full color palette and design system.

## Development Roadmap

See `../PROJECT_PLAN.md` for the complete project plan and feature roadmap.

## License

Personal project - All rights reserved
