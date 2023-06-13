import { Wrapper } from "@/components/styled/wrapper";
import { styled } from "@stitches/react";

export const Box = styled(Wrapper, {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(550px, 1fr))",
  gap: "2rem",
});

export const LeftSection = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 22,

  ".back": {
    width: "max-content",
    backgroundColor: "transparent",
    border: "none",
    fontFamily: "var(--saira)",
    color: "$gray500",
    fontSize: "$md",
    fontWeight: 500,

    display: "flex",
    alignItems: "center",
    cursor: "pointer",

    gap: "0.5rem",
    textDecoration: "none",

    "&:hover": {
      filter: "brightness(0.8)",
      textDecoration: "underline",
    },
  },

  img: {
    borderRadius: "$md",
    objectFit: "contain",
  },
});

export const RightSection = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  fontFamily: "var(--saira)",

  ".top": {
    ".category": {
      color: "$gray400",
      fontWeight: 400,
      textTransform: "capitalize",
    },

    ".name": {
      color: "$gray400",
      fontWeight: 300,
    },

    ".price": {
      color: "$gray900",
      fontWeight: 600,
      fontSize: "1.25rem",
    },

    ".freight": {
      marginTop: 24,
      display: "block",
      color: "$gray400",
      fontSize: "$sm",
      fontWeight: 400,
    },
  },

  ".middle": {
    ".title-description": {
      textTransform: "uppercase",
      color: "$gray300",
      fontWeight: 500,
      fontSize: "$normal",
    },

    ".description": {
      fontSize: "$md",
      fontWeight: 400,
      color: "$gray400",
    },
  },

  ".add-to-cart": {
    backgroundColor: "$blue",
    border: "none",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    color: "$white",

    padding: 10,

    fontFamily: "var(--saira)",
    fontWeight: 500,
    fontSize: "$normal",
    textTransform: "uppercase",

    borderRadius: "$md",
    cursor: "pointer",
    filter: "brightness(0.9)",
  },
});
