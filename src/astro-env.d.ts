/// <reference types="astro/client" />

/**
 * Allow importing .astro files as modules with a default export.
 * This prevents the TypeScript error:
 *   "Module '.../Layout.astro' has no default export. (ts1192)"
 *
 * The declaration uses `any` to keep it simple and robust across Astro versions.
 * If you prefer stricter typing, replace `any` with a more specific component type.
 */
declare module "*.astro" {
  const component: any;
  export default component;
}
