import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { client } from '../services';
import { useQuery, gql } from '@apollo/client';


function CollectionPage() {
  const handle = useParams().handle;
  const GET_COLLECTION = gql`
    query {
      collectionByHandle(handle: "${handle}") {
        id
        title
        description
        products(first: 250) {
          edges {
            node {
              id
              title
              handle
              description
              images(first: 1) {
                edges {
                  node {
                    originalSrc
                  }
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    price
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_COLLECTION, { client });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data?.collectionByHandle?.products) {
      setProducts(data?.collectionByHandle?.products.edges.map(({ node }) => node));
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const { collectionByHandle: collection } = data;
  return (
    <div>
      <h1 className='text-center block mb-3'>{collection?.title}</h1>
      <p>{collection?.description}</p>
      <div>
        {products?.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <h2 className='text-center'>{product.title}</h2>
            <img src={product.images.edges[0].node.originalSrc} alt={product.images.edges[0].node.altText} />
            <p>{product.variants.edges[0].node.price}</p>
          </Link>
        ))}
      </div>
    </div>  
  );
};

export default CollectionPage;