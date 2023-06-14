import { styled } from "@/styles";

export const Box = styled("div", {
  backgroundColor: "$white",

  display: "flex",
  borderRadius: "$md",
  overflow: "hidden",

  ".product-image": {
    height: "100%",
    objectFit: "fill",
  },

  ".product-infos": {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      h1: {
        fontSize: "1.25rem",
        color: "$gray400",
        fontWeight: 300,
      },

      ".delete": {
        backgroundColor: "transparent",
        border: "none",
        color: "$red",
      },
    },

    ".description": {
      fontWeight: 400,
      fontSize: "0.875rem",
      color: "$gray400",
    },
  },

  "@sm": {
    display: "flex",
    flexDirection: "column",

    ".product-image": {
      width: "100%",
      height: "100%",
    },

    ".product-infos": {
      padding: "1rem",

      header: {
        h1: {
          fontSize: "1rem",
        },
      },

      ".description": {
        fontSize: "0.75rem",
      },
    },
  },
});
