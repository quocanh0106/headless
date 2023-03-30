import React from 'react';
import Layout from '../../components/Layout';
import { useParams } from 'react-router-dom';
import { client } from '../../services';
import { useQuery, gql } from '@apollo/client';
import { AddToCartButton } from './ProductForm'
const ProductPage = () => {
  const handle = useParams().handle;
  const GET_PRODUCT = gql`
    query {
      productByHandle(handle: "${handle}") {
        id
        title
        handle
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 100) {
          edges {
            node {
              id
              priceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `
  const { loading, error, data } = useQuery(GET_PRODUCT, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const product = data?.productByHandle;

  return (
    <Layout>
      <h1 className='text-center block mb-3'>{product.title}</h1>
      <img src={product.images.edges[0].node.originalSrc} alt={product.images.edges[0].node.altText} />
      <p>Price: {product.variants.edges[0].node.priceV2.amount} {product.variants.edges[0].node.priceV2.currencyCode}</p>
      <AddToCartButton product={product} />
    </Layout>
  );
};

export default ProductPage;