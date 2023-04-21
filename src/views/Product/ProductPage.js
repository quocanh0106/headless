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
        description
        images(first: 250, after: null) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 250, after: null) {
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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-6 lg:px-8 max-w-container mx-auto my-8 items-center'>
        <img className='w-full' src={product.images.edges[0].node.originalSrc} alt={product.images.edges[0].node.altText} />
        <div className='w-full'>
          <h1 className='block mb-3 w-full text-3xl font-bold'>{product.title}</h1>
          <p className='block mb-3 w-full'>{product.description}</p>
          <p className='block mb-3 w-full'>Price: {product.variants.edges[0].node.priceV2.amount} {product.variants.edges[0].node.priceV2.currencyCode}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;