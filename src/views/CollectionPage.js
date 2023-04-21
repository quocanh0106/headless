import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { client } from '../services';
import { useQuery, gql } from '@apollo/client';
import Layout from '../components/Layout';

function CollectionPage() {
  const handle = useParams().handle;
  const GET_COLLECTION = gql`
    query AllProducts($after: String) {
      collectionByHandle(handle: "${handle}") {
        id
        title
        image {
          url
        }
        description
        products(first: 16, after: $after) {
          edges {
            node {
              id
              title
              handle
              description
              priceRange { 
                minVariantPrice {
                  amount
                }
                maxVariantPrice {
                  amount
                }
              }
              images(first: 250) {
                edges {
                  node {
                    originalSrc
                  }
                }
              }
              variants(first: 250) {
                edges {
                  node {
                    compareAtPrice
                    price
                  }
                }
              }
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
          }
        }
      }
    }
  `;
  // const TOTAL_COUNT = gql`
  //   query totalCount($id: ID) {
  //     collection(id: $id) {
  //       productsConnection(first: 1) {
  //         totalCount
  //       }
  //     }
  //   }
  // `
  const { loading, error, data } = useQuery(GET_COLLECTION, { client });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data?.collectionByHandle?.products) {
      setProducts(data?.collectionByHandle?.products.edges.map(({ node }) => node));
    }
  }, [data]);
  if (loading) return <Layout><p>Loading...</p></Layout>;
  if (error) return <Layout><p>Error: {error.message}</p></Layout>;
  const { collectionByHandle: collection } = data;

  return (
    <Layout>
      <div className='relative'>
        <img src={collection?.image?.url} alt="banner"/>
        <h1 className='text-center block text-4xl font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{collection?.title}</h1>
      </div>
      
      <div className='grid grid-cols-4 gap-4 max-w-container mx-auto px-4 mb-5 md:mb-8 mt-8'>
        {products?.map((product) => (
          <div className='w-full' key={product.id}>
            <Link to={`/products/${product.handle}`} className='w-full'>
              <img className='w-full' src={product.images.edges[0].node.originalSrc} alt={product.images.edges[0].node.altText} />
            </Link>
            <Link to={`/products/${product.handle}`} className='w-full mt-2'>
              <h3 className='text-xl'>{product.title}</h3>
            </Link>
            <p className='w-full mt-2'>{product.variants.edges[0].node.price}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CollectionPage;