/**
 * PostCSS configuration for Tailwind CSS v4 (using the separate PostCSS plugin)
 *
 * Notes:
 * - Install the required packages before running the dev server:
 *     npm install -D @tailwindcss/postcss postcss autoprefixer
 *
 * - This configuration uses the PostCSS plugin package for Tailwind v4:
 *     @tailwindcss/postcss
 *
 * - Keep Autoprefixer enabled to ensure vendor prefixes where necessary.
 */

module.exports = {
  plugins: [
    // Tailwind v4 moved the PostCSS plugin into a separate package:
    require("@tailwindcss/postcss"),
    // Autoprefixer for cross-browser compatibility:
    require("autoprefixer"),
  ],
};
