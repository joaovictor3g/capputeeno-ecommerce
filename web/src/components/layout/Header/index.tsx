import { HeaderContainer, Logo, CartButton, InputSearch } from "./styles";
import { Search, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <HeaderContainer>
      <div className="fixed">
        <div className="wrapper">
          <Logo href="/">uzumaki.drops</Logo>

          <div className="end">
            <InputSearch>
              <input
                type="text"
                placeholder="Procurando por algo específico?"
              />
              <Search />
            </InputSearch>

            <CartButton href="/cart">
              <ShoppingBag />
            </CartButton>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}
