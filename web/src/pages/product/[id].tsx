import { Product } from "@/@types/Product";
import {
  Box,
  LeftSection,
  RightSection,
} from "@/components/pages/ProductDetail/styles";
import apolloClient from "@/lib/apollo";
import { gql } from "@apollo/client";

import { Undo2, ShoppingBag } from "lucide-react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>

      <main>
        <Box>
          <Link href="/" className="back">
            <Undo2 size={18} />
            Voltar
          </Link>
          <div>
            <LeftSection>
              <Image
                src={product.imageUrl}
                className="image"
                alt="mugs"
                width={300}
                height={300}
              />
            </LeftSection>
            <RightSection>
              <div className="top">
                <small className="category">{product.category}</small>
                <h1 className="name">{product.name}</h1>
                <span className="price">R$ {product.priceFormatted}</span>

                <small className="freight">
                  *Frete de R$40,00 para todo o Brasil. Grátis para compras
                  acima de R$900,00.
                </small>
              </div>

              <div className="middle">
                <span className="title-description">Descrição</span>
                <p className="description">{product.description}</p>
              </div>

              <button className="add-to-cart">
                <ShoppingBag />
                Adicionar ao carrinho
              </button>
            </RightSection>
          </div>
        </Box>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query Products($page: Int, $perPage: Int) {
        allProducts(page: $page, perPage: $perPage) {
          id
        }
      }
    `,
    variables: {
      page: 1,
      perPage: 30,
    },
  });

  const paths = data.allProducts.map((product: { id: string }) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params!.id;

  const { data } = await apolloClient.query({
    query: gql`
      query Product($productId: ID!) {
        Product(id: $productId) {
          category
          created_at
          description
          id
          image_url
          name
          price_in_cents
          sales
        }
      }
    `,
    variables: {
      productId: id,
    },
  });

  const product = data.Product;

  return {
    props: {
      product: {
        ...product,
        imageUrl: product.image_url,
        price: product.price_in_cents / 100,
        priceFormatted: new Intl.NumberFormat("pt-BR", {
          currency: "BRL",
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        }).format(product.price_in_cents / 100),
      },
    },
  };
};
