import { styled } from "@/styles";
import * as Tabs from "@radix-ui/react-tabs";

export const TabsRoot = styled(Tabs.Root, {
  display: "flex",
  flexDirection: "column",
});

export const TabsList = styled(Tabs.List, {
  flexShrink: 0,
  display: "flex",
  maxWidth: 300,
  width: "100%",
});

export const TabsTrigger = styled(Tabs.Trigger, {
  all: "unset",
  "--orange": "#FFA585",
  fontFamily: "var(--saira)",
  padding: "0 20px",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "$normal",
  lineHeight: 1,
  userSelect: "none",
  boxShadow: "none",
  "&:hover": { filter: "brightness(0.9)", cursor: "pointer" },
  "&[data-state=active]": {
    fontWeight: "600",
    boxShadow: `inset 0 -1px 0 0 var(--orange), 0 4px 0 0 var(--orange)`,
  },
});

export const TabsContent = styled(Tabs.Content, {
  marginTop: "3rem",
  flexGrow: 1,
  padding: "0.5rem",
  outline: "none",

  ".tab-content": {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(256px, 1fr))",
    gap: "2rem",
  },
});
