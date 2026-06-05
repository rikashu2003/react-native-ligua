import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lingua: {
          purple: "#6C4EF5",
          deep: "#5B3BF6",
          blue: "#4D8BFF",
          green: "#21C16B",
        },
        semantic: {
          success: "#21C16B",
          warning: "#FFC800",
          streak: "#FF8A00",
          error: "#FF4D4F",
          info: "#4D8BFF",
        },
        text: {
          primary: "#0D132B",
          secondary: "#6B7280",
        },
        surface: "#F6F7FB",
        border: "#E5E7EB",
        background: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Poppins", "System"],
        poppins: ["Poppins", "System"],
      },
      boxShadow: {
        card: "0 18px 40px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        xxl: "24px",
      },
    },
  },
  plugins: [],
} satisfies Config;
