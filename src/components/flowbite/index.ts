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
export { default as Header } from "./Header.astro";
export { default as Footer } from "./Footer.astro";

// Hero Components
export { default as HeroCarousel } from "./HeroCarousel.astro";

// Interactive Components
export { default as Carousel } from "./Carousel.astro";

// Feature Components
export { default as FeatureAlternate } from "./FeatureAlternate.astro";

// Re-export types for convenience
export type { NavLink } from "./Header.astro";
export type { Slide } from "./HeroCarousel.astro";
export type { FeatureItem } from "./FeatureAlternate.astro";
export type { FooterLink, FooterColumn, SocialLink } from "./Footer.astro";
