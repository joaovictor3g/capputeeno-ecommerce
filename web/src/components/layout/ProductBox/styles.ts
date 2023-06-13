import { styled } from "@/styles";

export const ProductBoxContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  borderRadius: "$md",
  overflow: "hidden",
  gap: "0.5rem",
  backgroundColor: "$white",
  maxWidth: 300,
  width: "100%",

  img: {
    objectFit: "contain",
  },

  ".product-text-infos": {
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem 0.75rem",
    fontFamily: "var(--saira)",

    a: {
      fontWeight: 300,
      fontSize: "normal",
      color: "$gray400",
      borderBottom: "1px solid #DCE2E6",
      paddingBottom: "0.5rem",
      textDecoration: "none",

      "&:hover": {
        textDecoration: "underline",
      },
    },

    ".price": {
      paddingTop: "0.5rem",
      color: "$gray900",
      fontWeight: "bold",
      fontSize: "$normal",
    },
  },

  "@md": {
    maxWidth: "initial",
  },
});
