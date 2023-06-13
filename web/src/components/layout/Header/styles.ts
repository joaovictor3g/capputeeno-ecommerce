import { styled } from "@/styles";

export const HeaderContainer = styled("header", {
  backgroundColor: "$white",

  ".wrapper": {
    maxWidth: 1200,
    width: "100%",
    padding: "0.5rem",
    margin: "0 auto",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  ".end": {
    display: "flex",
    alignItems: "center",
    gap: "1rem",

    "@md": {
      width: "100%",
    },
  },
});

export const Logo = styled("h1", {
  fontFamily: "var(--saira-stencil-one)",
  color: "$gray200",
});

export const InputSearch = styled("div", {
  color: "$gray300",
  backgroundColor: "$gray100",
  borderRadius: "$md",
  padding: "0.5rem 1rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minWidth: 280,
  flex: 1,

  input: {
    outline: "none",
    backgroundColor: "inherit",
    border: "none",
    fontFamily: "var(--saira)",
    flex: 1,
    fontSize: "$md",
  },
});

export const CartButton = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  color: "$gray300",
  position: "relative",

  "&:hover": {
    cursor: "pointer",
  },

  "&:after": {
    content: "2",
    backgroundColor: "$red",
    width: 17,
    height: 17,

    position: "absolute",
    bottom: -4,
    right: -3,

    fontFamily: "var(--saira)",
    borderRadius: "$full",
    color: "$white",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
