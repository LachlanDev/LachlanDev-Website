import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#121214",
            content1: {
              DEFAULT: "#1E1E20",
              foreground: "#FFFFFF"
            },
            content2: {
              DEFAULT: "#27272A", 
              foreground: "#FFFFFF"
            },
            foreground: {
              DEFAULT: "#FFFFFF",
              500: "#D1D5DB"
            },
            primary: {
              50: "#E3F5FF",
              100: "#C7EBFF",
              200: "#8FD6FF",
              300: "#57C2FF",
              400: "#2EADFF",
              500: "#0095FF",
              600: "#0077CC",
              700: "#005999",
              800: "#003C66",
              900: "#001E33",
              DEFAULT: "#0095FF",
              foreground: "#FFFFFF"
            }
          }
        }
      }
    })
  ]
}