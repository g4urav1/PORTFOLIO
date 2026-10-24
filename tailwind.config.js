
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        main: "var(--text)",
        muted: "var(--text-muted)",
        default: "var(--border)",
        success: "var(--success)",
        error: "var(--error)",
      },
    },
  },
  plugins: [],
};
