import { CartProduct } from "@/components/pages/Cart/Product";
import { Box, LeftSection, RightSection } from "@/components/pages/Cart/styles";
import { Undo2 } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Seu carrinho</title>
      </Head>
      <main>
        <Box>
          <LeftSection>
            <Link href="/" className="back">
              <Undo2 size={18} />
              Voltar
            </Link>

            <div className="text">
              <h1>Seu carrinho</h1>
              <span className="total-price">
                Total (3 produtos) <strong>R$ 161,00</strong>
              </span>
            </div>

            <div className="products">
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
            </div>
          </LeftSection>

          <RightSection>
            <div className="bill-container">
              <p className="resume">Resumo do pedido</p>

              <div className="details">
                <span>
                  Subtotal de produtos <span>R$ 161,00</span>
                </span>
                <span>
                  Entrega <span>R$ 161,00</span>
                </span>

                <strong className="details-total">
                  Total <span>R$ 201,00</span>
                </strong>
              </div>

              <button className="end-buy">Finalizar a compra</button>
            </div>
          </RightSection>
        </Box>
      </main>
    </>
  );
}
