import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Product from "./Product";
import styled from "styled-components";

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 60px;
`;
export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error `${error.message}`</p>;
  }
  return (
    <div>
      <ProductStyles>
        {data.allProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ProductStyles>
    </div>
  );
}
