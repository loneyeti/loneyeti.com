// tailwind.config.ts
// tailwind.config.ts
import type { Config } from "tailwindcss/plugin";
import type { PluginUtils } from "tailwindcss/plugin";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{astro,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Lone Yeti palette
        primary: {
          DEFAULT: "#1b6bf2",
          50: "#eef4ff",
          100: "#dbe7ff",
          700: "#1759c5",
        },
        accent: { DEFAULT: "#ff6b00" },
      },
      fontFamily: {
        sans: ["InterVariable", "ui-sans-serif", "system-ui"],
      },
      // ← Here we annotate the argument as Tailwind’s PluginAPI
      typography: ({ theme }: PluginUtils) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.slate.700"),
            "--tw-prose-headings": theme("colors.slate.900"),
            "--tw-prose-links": theme("colors.primary.DEFAULT"),
            "--tw-prose-bold": theme("colors.slate.900"),
            "--tw-prose-code": theme("colors.fuchsia.700"),
            "--tw-prose-pre-bg": theme("colors.slate.900"),
            a: {
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            },
            code: {
              fontWeight: "400",
              background: theme("colors.slate.100"),
              padding: "2px 4px",
              borderRadius: "4px",
            },
            "pre code": { background: "none", padding: 0 },
          },
        },
        dark: {
          css: {
            "--tw-prose-body": theme("colors.slate.200"),
            "--tw-prose-headings": theme("colors.slate.100"),
            "--tw-prose-links": theme("colors.primary.100"),
            "--tw-prose-bold": theme("colors.slate.100"),
            "--tw-prose-code": theme("colors.fuchsia.300"),
            "--tw-prose-pre-bg": theme("colors.slate.800"),
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
