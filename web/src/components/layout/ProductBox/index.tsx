import { Product } from "@/@types/Product";
import { ProductBoxContainer } from "./styles";

export function ProductBox(props: Product) {
  return (
    <ProductBoxContainer>
      <img src={props.imageUrl} alt={props.name} />
      <div className="product-text-infos">
        <a href="#">{props.name}</a>
        <span className="price">R$ {props.priceFormatted}</span>
      </div>
    </ProductBoxContainer>
  );
}
