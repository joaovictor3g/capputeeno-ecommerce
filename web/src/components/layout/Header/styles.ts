import { styled } from "@/styles";
import Link from "next/link";

export const HeaderContainer = styled("header", {
  height: 80,

  ".fixed": {
    backgroundColor: "$white",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 9999,
    borderBottom: "1px solid $gray100",
  },

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

  "@md": {
    height: 120,
  },
});

export const Logo = styled(Link, {
  fontFamily: "var(--saira-stencil-one)",
  color: "$gray200",
  fontSize: "2.5rem",
  textDecoration: "none",
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

export const CartButton = styled(Link, {
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
    fontSize: "0.75rem",
    borderRadius: "$full",
    color: "$white",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
