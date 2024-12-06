import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notojp: ["var(--font-notojp)"],
        mplus1p: ["var(--font-mplus1p)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
