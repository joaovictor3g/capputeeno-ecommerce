import { ProductBoxContainer } from "./styles";

interface ProductBoxProps {
  imageUrl: string;
  id: string;
  price: number;
  name: string;
}

export function ProductBox(props: ProductBoxProps) {
  return (
    <ProductBoxContainer>
      <img src={props.imageUrl} alt={props.name} />
      <div className="product-text-infos">
        <a href="#">{props.name}</a>
        <span className="price">R$ {props.price}</span>
      </div>
    </ProductBoxContainer>
  );
}
