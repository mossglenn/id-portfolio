# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website built with Astro 5, React, and Tailwind CSS v4. Uses Astro's Islands architecture for optimal performance with selective React component hydration.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start dev server (localhost:4321)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint

# Format code
pnpm format

# Type check (Astro + TypeScript)
pnpm type-check

# Validate all (type-check + lint + format check)
pnpm validate

# Run Astro CLI commands
pnpm astro [command]
```

## Environment Setup

### Node Version

- **Required:** Node.js 20+ (specified in `.nvmrc`)
- Use `nvm use` or `fnm use` to automatically switch to the correct version

### Environment Variables

1. Copy `.env.example` to `.env`
2. Update values as needed (see comments in `.env.example`)
3. Variables prefixed with `PUBLIC_` are exposed to client-side code
4. **Important:** Update `site` in `astro.config.mjs` with your production URL for proper SEO

### Editor Configuration

- `.editorconfig` ensures consistent code style across editors
- VS Code settings configured for optimal DX (format on save, auto-fix linting)
- Recommended extensions in `.vscode/extensions.json` (install all for best experience)

## Architecture & Tech Stack

### Framework Setup

- **Astro 5**: Multi-page application framework with file-based routing in `src/pages/`
- **React 19**: Used for interactive components with selective hydration via `client:*` directives
- **MDX**: Markdown with JSX support for content-rich pages

### Styling Architecture

- **Tailwind CSS v4**: Uses the new CSS-first configuration approach (configured in `src/styles/global.css`)
- **Flowbite**: Component library for UI elements, bundled locally via `import "flowbite"` in Layout.astro
- **Flowbite Typography**: Typography plugin for content styling
- **Custom utility**: `cn()` helper in `src/lib/cn.ts` combines `clsx` and `tailwind-merge` for conditional class merging

### Key Configuration Details

- **Vite + Tailwind v4**: Tailwind is integrated via Vite plugin (`@tailwindcss/vite`) in `astro.config.mjs`
- **TypeScript**: Strict mode enabled with Astro's extended tsconfig
- **JSX Runtime**: Configured for React JSX transform (no React import needed in React components)

## Project Structure

```markdown
src/
├── assets/          # Static assets (images, SVGs)
├── components/      # Astro and React components
│   ├── flowbite/   # Adapted Flowbite UI components
│   ├── mdx/        # Components for use in MDX content
│   ├── ui/         # Custom reusable UI primitives
│   ├── *.astro     # Astro components (server-rendered by default)
│   └── *.tsx       # React components (require client: directive for hydration)
├── content/         # Content collections (MDX/Markdown files)
├── layouts/         # Page layouts (Layout.astro is the base layout)
├── lib/            # Utility functions
├── pages/          # File-based routing (index.astro = homepage)
└── styles/         # Global CSS (Tailwind v4 config lives here)
```

## Key Components

### SEO Component (`src/components/SEO.astro`)

Centralized SEO management for all pages with Open Graph and Twitter Card support.

**Usage:**

```astro
---
import SEO from "@/components/SEO.astro";
import Layout from "@/layouts/Layout.astro";
---

<Layout>
  <SEO
    title="Page Title"
    description="Page description for search engines and social media"
    image="/images/og-image.png"
    keywords={["portfolio", "web development"]}
  />
  <!-- Page content -->
</Layout>
```

**Props:**

- `title` (required): Page title
- `description` (required): Meta description
- `image` (optional): Social media image URL (defaults to `/og-default.png`)
- `article` (optional): Set to `true` for blog posts
- `publishedTime` (optional): ISO date string for articles
- `keywords` (optional): Array of SEO keywords

## Important Patterns

### Astro Islands (Partial Hydration)

- React components must use `client:*` directives to hydrate on the client
- Example: `<Counter client:load />` in Welcome.astro:31
- Available directives: `client:load`, `client:idle`, `client:visible`, `client:media`, `client:only`

### Tailwind CSS v4 Configuration

- Configuration is in CSS files, not JavaScript config files
- `src/styles/global.css` contains the Tailwind and Flowbite imports
- Uses `@import`, `@plugin`, and `@source` directives instead of traditional `tailwind.config.js`

### Component Styling

- Astro components can use scoped `<style>` tags (see Welcome.astro)
- React components use Tailwind utility classes
- Global styles imported in Layout.astro:2

### Layout System

- `Layout.astro` is the base HTML shell with `<slot />` for page content
- Pages in `src/pages/` can import and wrap content with layouts

## Development Notes

- **Linting**: ESLint configured for Astro, React, and TypeScript
- **Formatting**: Prettier with Astro plugin for consistent formatting
- **Type Checking**: Run `pnpm type-check` to validate TypeScript and Astro files
- **Pre-deployment Validation**: Run `pnpm validate` before commits to check types, linting, and formatting
- **Assets**: Static files go in `public/`, imported assets go in `src/assets/`
- **TypeScript**: All `.astro`, `.tsx`, and `.ts` files support TypeScript
- **Hot Reload**: Dev server supports HMR for fast development iteration

## Claude Code Setup

- **Account**: Claude Pro subscription (not API/CLI)
- **Environment**: VS Code extension
- **MCP Servers**: Flowbite MCP configured in `.mcp.json` (gitignored)
- **Flowbite Components**: Adapted components go in `src/components/flowbite/`

## VS Code Configuration

The project includes optimized VS Code settings for enhanced developer experience:

- **Auto-formatting**: Format on save with Prettier
- **Auto-linting**: ESLint auto-fix on save
- **Tailwind IntelliSense**: Works inside the `cn()` utility function
- **File Nesting**: Test files nested under source files for cleaner sidebar
- **Auto-save**: Saves on focus change for better HMR experience
- **Recommended Extensions**: Install all recommended extensions for optimal DX
  - Astro language support
  - Prettier & ESLint integration
  - Tailwind CSS IntelliSense
  - Error Lens (inline error display)
  - Path IntelliSense
  - Code Spell Checker
  - dotenv support
  - Pretty TypeScript Errors
