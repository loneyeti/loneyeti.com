# Technical Context

## Technology Stack

The Lone Yeti website is built using the following technology stack:

### Core Technologies

- **[Astro](https://astro.build/)** (v5.7.4): A modern static site builder with a focus on performance
- **[TailwindCSS](https://tailwindcss.com/)** (v4.1.4): Utility-first CSS framework
- **[MDX](https://mdxjs.com/)** (via @astrojs/mdx v4.2.4): Markdown with JSX support for content authoring

### Additional Libraries & Dependencies

- **[date-fns](https://date-fns.org/)** (v4.1.0): Modern JavaScript date utility library
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** (v0.5.16): Typography plugin for Tailwind

## Development Environment

### Build System

- **Node.js**: Runtime environment
- **npm**: Package manager
- Astro's built-in build system

### Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally

## File Structure

```
/
├── public/             # Static assets served as-is
├── src/
│   ├── assets/         # Images and other assets processed by Astro
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layout templates
│   ├── pages/          # File-based routing
│   │   └── blog/       # Blog posts (MDX)
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
├── package.json        # Project dependencies
└── tailwind.config.ts  # Tailwind configuration
```

## Configuration Details

### Astro Configuration

The `astro.config.mjs` file configures the Astro build process, including:

- MDX integration
- Build output settings
- Any other plugins or integrations

### Tailwind Configuration

The `tailwind.config.ts` file includes:

- Custom color palette with primary and accent colors
- Typography plugin configuration
- Dark mode support (`class` strategy)
- Content paths for Tailwind to scan

## Content Management

The site uses a file-based content management approach:

1. **Blog Posts**: MDX files in `/src/pages/blog/`
2. **Front Matter**: YAML metadata at the top of MDX files defines:
   - Title
   - Publication date
   - Description
   - Tags
   - Hero image (optional)
   - Canonical URL (optional)

## Styling Approach

1. **TailwindCSS Utilities**: Primary styling method
2. **Component-scoped styles**: Used in Astro components when needed
3. **Typography Plugin**: For rich text styling in blog content
4. **Global CSS**: Minimal global styles in `src/styles/global.css`

## Performance Considerations

1. **Static Generation**: All pages pre-built at build time
2. **Minimal JavaScript**: Astro's Island architecture limits client-side JS
3. **Optimized Assets**: Images and other assets processed during build
4. **Typography Configuration**: Custom configuration for optimal reading experience

## Development Workflow

1. Create content in MDX format
2. Develop components and layouts as needed
3. Use `npm run dev` for local development
4. Preview with `npm run preview`
5. Build with `npm run build`

## Deployment

The deployment process is not yet documented but will likely involve:

1. Building the static site
2. Deploying to a static hosting service
3. Setting up any needed redirects or custom domains
