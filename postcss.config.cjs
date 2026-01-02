/**
 * PostCSS configuration for Tailwind CSS (v4) and Autoprefixer.
 *
 * This simple config is suitable for Astro projects using Tailwind.
 * If you add additional PostCSS plugins (e.g. `postcss-import` or `postcss-nesting`),
 * include them here in the appropriate order:
 *   - postcss-import
 *   - postcss-nesting (or postcss-preset-env)
 *   - tailwindcss
 *   - autoprefixer
 */

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
