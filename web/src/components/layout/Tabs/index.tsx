import React, { cloneElement } from "react";
import { TabsContent, TabsList, TabsRoot, TabsTrigger, Box } from "./styles";

const items = [
  {
    name: "Todos os produtos",
    value: "all",
  },
  {
    name: "Camisetas",
    value: "t-shirts",
  },
  {
    name: "Canecas",
    value: "mugs",
  },
];

interface TabsProps {
  children: React.JSX.Element[];
  renderRight?: React.JSX.Element;
  onChange(tab: "all" | "t-shirts" | "mugs"): void;
}

export function Tabs({ children, renderRight, onChange }: TabsProps) {
  return (
    <TabsRoot defaultValue="all">
      <Box>
        <TabsList aria-label="Gerencie os produtos">
          {items.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              onClick={() => onChange(item.value as any)}
            >
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {renderRight}
      </Box>
      {children.map((child, i) => (
        <TabsContent key={i} value={child.props["tab-value"]}>
          {cloneElement(child, {
            className: "tab-content",
          })}
        </TabsContent>
      ))}
    </TabsRoot>
  );
}
