/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta": ["'Plus Jakarta Sans'", "sans-serif"],
        "permanent-marker": ["'Permanent Marker'", "cursive"],
        "jetbrain-mono": ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
