import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B1A17",
        wax: "#F7EEDA",
        "wax-deep": "#EFE0B8",
        "wax-line": "rgba(27, 26, 23, 0.12)",
        amber: {
          DEFAULT: "#F2A93B",
          deep: "#C97A1A",
          pale: "#FBE3B4"
        },
        navy: {
          DEFAULT: "#21324A",
          deep: "#131E2E",
          pale: "#33496A"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(27,26,23,0.06) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
