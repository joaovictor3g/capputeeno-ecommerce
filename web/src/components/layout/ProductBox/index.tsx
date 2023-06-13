import { Product } from "@/@types/Product";
import { ProductBoxContainer } from "./styles";
import Link from "next/link";

export function ProductBox(props: Product) {
  return (
    <ProductBoxContainer>
      <img src={props.imageUrl} alt={props.name} />
      <div className="product-text-infos">
        <Link href={`/product/${props.id}`}>{props.name}</Link>
        <span className="price">R$ {props.priceFormatted}</span>
      </div>
    </ProductBoxContainer>
  );
}
