import { cloneElement } from "react";
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "./styles";

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
}

export function Tabs({ children }: TabsProps) {
  return (
    <TabsRoot defaultValue="all">
      <TabsList aria-label="Gerencie os produtos">
        {items.map((item) => (
          <TabsTrigger key={item.value} value={item.value}>
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>
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
