import { createStitches } from "@stitches/react";

export const {
  styled,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  theme,
} = createStitches({
  theme: {
    colors: {
      gray100: "#F3F5F6",
      gray200: "#5D5D6D",
      gray300: "#737380",
      gray400: "#41414D",
      gray500: "#617480",
      gray900: "#09090A",

      white: "#FFFFFF",

      red: "#DE3838",

      orange: "#FFA585",

      blue: "#115D8C",
    },

    fontSizes: {
      sm: "0.75rem",
      md: "0.875rem", // 14px
      normal: "1rem",
    },

    radii: {
      md: "0.5rem",
      full: "9999px",
    },
  },

  media: {
    sm: "(max-width: 500px)",
    md: "(max-width: 768px)",
  },
});
