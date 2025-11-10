# OWNDAYS Campaign Landing Page

Responsive landing page for OWNDAYS's campaign built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or higher (required for Next.js 14)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to view the application.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
├── globals.css          # Global styles and Tailwind directives
├── layout.tsx           # Root layout with metadata and fonts
└── page.tsx             # Main landing page with all sections

components/
├── buttons/             # Button components
├── navigation/          # Navigation components
├── products/            # Product display components
├── sections/            # Page section components
└── shared/              # Reusable UI components

lib/
├── types.ts             # TypeScript interfaces and types
└── utils.ts             # Utility functions

public/
├── fonts/               # Local font files (Outfit, Noto Sans JP)
└── images/              # Image assets organized by section
```

## 🎨 Design Decisions

### Component Architecture

- **Atomic Components**: Reusable buttons, badges, dividers
- **Composite Components**: Cards, carousels that combine multiple atomic components
- **Mobile-First**: All components designed for mobile, enhanced for larger screens

### Tailwind CSS

- **Custom Colors**: OWNDAYS brand colors in `tailwind.config.js`
- **Custom Fonts**: Local fonts (Outfit, Noto Sans JP) + Adobe Typekit
- **Breakpoints**: 
  - Mobile: default
  - Tablet: `md:` (768px+)
  - Desktop: `lg:` (1024px+)
  - Large: `xl:` (1280px+)
