import { Wrapper } from "@/components/styled/wrapper";
import { styled } from "@/styles";

export const Box = styled(Wrapper, {
  display: "grid",
  gridTemplateColumns: "1fr 352px",
  gap: "2rem",

  fontFamily: "var(--saira)",

  "@lg": {
    gridTemplateColumns: "1fr",
  },
});

export const LeftSection = styled("section", {
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

  ".text": {
    marginTop: "2rem",

    h1: {
      fontSize: "1.5rem",
      color: "$gray400",
      textTransform: "uppercase",
    },

    ".total-price": {
      fontSize: "$normal",
      fontWeight: 300,
      color: "$gray400",
    },
  },

  ".products": {
    marginTop: "2rem",

    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
});

export const RightSection = styled("section", {
  maxWidth: 352,
  width: "100%",
  justifyContent: "end",

  ".bill-container": {
    backgroundColor: "$white",
    borderRadius: "$md",

    display: "flex",
    flexDirection: "column",
    padding: "1rem",

    ".resume": {
      fontWeight: 600,
      fontSize: "1.25rem",
      textTransform: "uppercase",
    },

    ".details": {
      marginTop: 29,
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      fontSize: "$normal",
      fontWeight: 400,

      "& > span": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },

      "&-total": {
        borderTop: "1px solid $gray100",
        paddingTop: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        fontWeight: 600,
      },
    },

    ".end-buy": {
      marginTop: 29,
      backgroundColor: "$green",
      border: "none",
      borderRadius: "$md",

      color: "$white",
      textTransform: "uppercase",
      padding: "1rem",

      fontFamily: "var(--saira)",
      fontWeight: 500,
      fontSize: "$normal",
    },
  },

  "@lg": {
    maxWidth: "initial",
    width: "100%",
  },
});
