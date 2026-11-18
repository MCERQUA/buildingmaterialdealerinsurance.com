import localFont from "next/font/local";

export const headingFont = localFont({
  src: [
    { path: "./fonts/PlusJakartaSans-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/PlusJakartaSans-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/PlusJakartaSans-variable.woff2", weight: "700", style: "normal" },
    { path: "./fonts/PlusJakartaSans-variable.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const bodyFont = localFont({
  src: [
    { path: "./fonts/Inter-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});
