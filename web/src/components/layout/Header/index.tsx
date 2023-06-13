import { HeaderContainer, Logo, CartButton, InputSearch } from "./styles";
import { Search, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <Logo>capputeeno</Logo>

        <div className="end">
          <InputSearch>
            <input type="text" placeholder="Procurando por algo específico?" />
            <Search />
          </InputSearch>

          <CartButton>
            <ShoppingBag />
          </CartButton>
        </div>
      </div>
    </HeaderContainer>
  );
}
