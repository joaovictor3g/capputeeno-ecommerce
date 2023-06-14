import { Wrapper } from "@/components/styled/wrapper";
import { styled } from "@stitches/react";

export const Box = styled(Wrapper, {
  "& > div": {
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
  },

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
});

export const LeftSection = styled("section", {
  width: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 22,

  ".image": {
    borderRadius: "$md",
    objectFit: "fill",
    width: "100%",
    height: "100%",
  },
});

export const RightSection = styled("section", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  fontFamily: "var(--saira)",
  gap: "1rem",

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
    width: "100%",

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
