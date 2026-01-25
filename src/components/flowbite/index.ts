/**
 * Flowbite Components
 *
 * Astro-adapted versions of Flowbite UI components.
 * These components use Flowbite's Tailwind classes and JavaScript
 * for interactive behavior.
 *
 * @see https://flowbite.com/docs/components/
 */

// Layout Components
export { default as Footer } from "./Footer.astro";
export { default as Header } from "./Header.astro";

// Feature Components
export { default as FeatureAlternate } from "./FeatureAlternate.astro";

// Re-export types for convenience
export type { FeatureItem } from "./FeatureAlternate.astro";
export type { FooterColumn, FooterLink, SocialLink } from "./Footer.astro";
export type { NavLink } from './Header.astro';

