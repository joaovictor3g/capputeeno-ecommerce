import Image from "next/image";
import { Box } from "./styles";
import { Trash2 } from "lucide-react";

export function CartProduct() {
  return (
    <Box>
      <Image
        src="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg"
        alt="mug"
        width={256}
        height={211}
        className="product-image"
      />

      <div className="product-infos">
        <header>
          <h1 className="name">Caneca de cerâmica rústica</h1>
          <button className="delete">
            <Trash2 />
          </button>
        </header>
        <p className="description">
          Aqui vem um texto descritivo do produto, esta caixa de texto servirá
          apenas de exemplo para que simule algum texto que venha a ser inserido
          nesse campo, descrevendo tal produto.
        </p>
      </div>
    </Box>
  );
}
