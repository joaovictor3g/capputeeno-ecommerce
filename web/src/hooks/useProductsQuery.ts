import { Product } from "@/@types/Product";
import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";

const GET_PRODUCTS_QUERY = gql`
  query Products(
    $page: Int
    $perPage: Int
    $filter: ProductFilter
    $allProductsMetaFilter: ProductFilter
  ) {
    allProducts(page: $page, perPage: $perPage, filter: $filter) {
      id
      created_at
      image_url
      price_in_cents
      sales
      category
      name
    }

    _allProductsMeta(filter: $allProductsMetaFilter) {
      count
    }
  }
`;

interface UseProducstQueryProps {
  page: number;
  perPage: number;
  category: string;
}

export function useProductsQuery({
  page,
  perPage,
  category,
}: UseProducstQueryProps) {
  const { data } = useQuery(GET_PRODUCTS_QUERY, {
    variables: {
      page,
      perPage,
      filter: category !== "all" ? { category } : undefined,
      allProductsMetaFilter: category !== "all" ? { category } : undefined,
    },
  });

  const dataParsed: Product[] = useMemo(() => {
    return data?.allProducts.map((product: any) => ({
      ...product,
      imageUrl: product.image_url,
      price: product.price_in_cents / 100,
      priceFormatted: new Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }).format(product.price_in_cents / 100),
    }));
  }, [data]);

  const totalProducts = data?._allProductsMeta?.count ?? 0;

  return {
    data: dataParsed,
    totalProducts,
  };
}
