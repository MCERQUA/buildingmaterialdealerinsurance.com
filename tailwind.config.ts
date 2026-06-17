import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Lumber Yard / Building Supply palette ===
        canvas: "#f6f5f3",          // warm light gray page bg
        canvasAlt: "#eef0ed",       // cool warm-gray alt section
        white: "#FFFFFF",
        // Brand
        emerald: {
          DEFAULT: "#047857",       // primary
          dark: "#065f46",
          light: "#d1fae5",
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        amber: {
          DEFAULT: "#d97706",       // secondary accent
          dark: "#b45309",
          light: "#fef3c7",
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
        },
        lumber: "#c8a96a",          // motif accent (pallet tan)
        // Text
        ink: "#1f2937",             // headings
        slateBody: "#374151",
        muted: "#6b7280",
        // Borders
        line: "#e5e1d8",            // warm neutral border
        lineDark: "#d6d1c4",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "lumber-stripes":
          "repeating-linear-gradient(180deg, rgba(4,120,87,0.0) 0px, rgba(4,120,87,0.0) 22px, rgba(4,120,87,0.06) 22px, rgba(4,120,87,0.06) 24px, rgba(217,119,6,0.0) 24px, rgba(217,119,6,0.0) 46px, rgba(217,119,6,0.07) 46px, rgba(217,119,6,0.07) 48px)",
        "rack-grid":
          "linear-gradient(rgba(4,120,87,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(4,120,87,0.05) 1px, transparent 1px)",
        "emerald-gradient": "linear-gradient(135deg, #047857 0%, #065f46 100%)",
        "amber-gradient": "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
        "hero-band":
          "linear-gradient(180deg, #f6f5f3 0%, #f6f5f3 60%, rgba(4,120,87,0.04) 100%)",
      },
      boxShadow: {
        card: "0 1px 3px -1px rgba(31,41,55,0.06), 0 2px 8px -2px rgba(31,41,55,0.06)",
        "card-hover": "0 18px 40px -16px rgba(4,120,87,0.18), 0 6px 18px -8px rgba(31,41,55,0.10)",
        pallet: "0 22px 50px -18px rgba(4,120,87,0.22), 0 10px 24px -10px rgba(31,41,55,0.10)",
        emerald: "0 12px 32px -12px rgba(4,120,87,0.35)",
        amber: "0 12px 32px -12px rgba(217,119,6,0.30)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "stack-reveal": {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "slow-zoom": "slow-zoom 22s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "stack-reveal": "stack-reveal 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
