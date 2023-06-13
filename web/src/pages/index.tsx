import { Product } from "@/@types/Product";
import { Pagination } from "@/components/layout/Pagination";
import { ProductBox } from "@/components/layout/ProductBox";
import { Tabs } from "@/components/layout/Tabs";
import { Wrapper } from "@/components/styled/wrapper";
import apolloClient from "@/lib/apollo";
import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import Head from "next/head";

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>capputeeno</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Wrapper>
          <div className="tabs-pagination-container">
            <Tabs renderRight={<Pagination />}>
              <div tab-value="all">
                {products
                  ? products.map((product) => (
                      <ProductBox key={product.id} {...product} />
                    ))
                  : null}
              </div>
              <div tab-value="t-shirts">T-Shirts</div>
              <div tab-value="mugs">Mugs</div>
            </Tabs>
          </div>
        </Wrapper>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await apolloClient.query({
    query: gql`
      query Products {
        allProducts {
          id
          created_at
          image_url
          price_in_cents
          sales
          category
          name
        }
      }
    `,
  });

  return {
    props: {
      products: data.allProducts
        .map((product: any) => ({
          ...product,
          imageUrl: product.image_url,
          price: new Intl.NumberFormat("pt-BR", {
            currency: "BRL",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          }).format(product.price_in_cents / 100),
        }))
        .slice(0, 8),
    },
  };
};
