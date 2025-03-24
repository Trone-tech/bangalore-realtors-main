/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "hsl(var(--foreground))",
        background: "rgb(var(--background) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground))",
      },
      animation: {
        scroll: "scroll var(--duration, 40s) linear infinite",
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 1rem))" },
        },
      },
    },
  },
  plugins: [],
}