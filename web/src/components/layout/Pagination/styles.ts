import { styled } from "@/styles";

export const PaginationContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  button: {
    backgroundColor: "#E9E9F0",
    border: "none",
    borderRadius: "$md",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 32,
    height: 32,

    color: "$gray300",

    "&:hover:not(:disabled)": {
      border: "1px solid $orange",
      color: "$orange",
      cursor: "pointer",

      transition: "0.5s border, 0.5s color",
    },

    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.7,
    },
  },
});

export const PaginationNumbers = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 2,

  ".page-number": {
    fontFamily: "var(--saira)",
    fontSize: "$normal",
    fontWeight: 600,
    fontStyle: "normal",

    '&[data-active="true"]': {
      border: "2px solid $orange",
      color: "$orange",
    },
  },
});

export const Arrows = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 2,
});
