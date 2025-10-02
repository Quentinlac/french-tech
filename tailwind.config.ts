import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#E6F0FF",
          100: "#B3D4FF",
          200: "#80B8FF",
          300: "#4D9DFF",
          400: "#1A81FF",
          500: "#0055A4", // French Blue (main)
          600: "#004C93",
          700: "#004082",
          800: "#003571",
          900: "#002960",
          DEFAULT: "#0055A4",
          light: "#3377BB",
          dark: "#003D7A",
        },
        secondary: {
          50: "#FFE6E6",
          100: "#FFB3B3",
          200: "#FF8080",
          300: "#FF4D4D",
          400: "#FF1A1A",
          500: "#E4002B", // Croatian Red (main)
          600: "#CC0026",
          700: "#B30022",
          800: "#99001D",
          900: "#800019",
          DEFAULT: "#E4002B",
          light: "#FF3333",
          dark: "#B30022",
        },
        accent: {
          50: "#FFFAEB",
          100: "#FFF3C6",
          200: "#FFEC9F",
          300: "#FFE578",
          400: "#FFDE51",
          500: "#FFD700", // Gold (main)
          600: "#E6C200",
          700: "#CCAC00",
          800: "#B39700",
          900: "#998200",
          DEFAULT: "#FFD700",
          light: "#FFE033",
          dark: "#CCAC00",
        },
        success: {
          50: "#ECFDF5",
          500: "#10B981",
          700: "#047857",
        },
        warning: {
          50: "#FFF7ED",
          500: "#F59E0B",
          700: "#C2410C",
        },
        error: {
          50: "#FEF2F2",
          500: "#EF4444",
          700: "#B91C1C",
        },
        navy: "#1a1a2e",
        offwhite: "#fafafa",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
export default config;