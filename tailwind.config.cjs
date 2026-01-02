module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f3b66',       // mørk blå aksent
        'primary-600': '#0d3358',
        accent: '#e4a11b',        // sekundær varm aksent (valgfri)
      },
      maxWidth: {
        'site': '1100px',
      },
      borderRadius: {
        md: '0.5rem',
      },
      boxShadow: {
        soft: '0 6px 18px rgba(15, 59, 102, 0.08)',
      },
    },
  },
  plugins: [
    // Hvis du vil bruke Tailwind-plugins senere, avkommenter disse:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
