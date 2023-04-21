import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { client } from '../../services';
import { LineItems } from './LineItem'
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';

function CartPage() {
  const [checkoutId, setCheckoutId] = useState(localStorage.getItem('checkoutId'));

  useEffect(() => {
    const checkoutIdFromStorage = localStorage.getItem('checkoutId');
    if (checkoutIdFromStorage) {
      setCheckoutId(checkoutIdFromStorage);
    }
  }, []);

  const CART_QUERY = gql`
    query {
      node(id: "${checkoutId}") {
        ... on Checkout {
          id
          webUrl
          subtotalPriceV2 {
            amount
            currencyCode
          }
          lineItems(first: 250, after: null) {
            edges {
              node {
                id
                title
                variant {
                  id
                  sku
                  priceV2 {
                    amount
                    currencyCode
                  }
                  image {
                    originalSrc
                    altText
                  }
                }
                quantity
              }
            }
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(CART_QUERY, { client });

  if (loading) return <Layout><p>Loading...</p></Layout>;
  if (error) {
    return <Layout>
      <div className='p-10 m-auto h-full w-full flex flex-wrap justify-center items-center'>
        <h2 className='text-4xl text-center w-full'>No items in cart</h2>
        <Link to='/collections/frontpage' className='block w-full mt-4 hover:text-gray-900 font-medium md:border-none md:p-0 text-center'>
          <button className='p-4 border rounded-lg hover:bg-black hover:text-white hover:border-black transition-all'>Continue shopping</button>
        </Link>
      </div>
    </Layout>;
  }
  return (
    <Layout>
      <div className='max-w-container mx-auto px-4 mb-5 md:mb-8'>
        <h1 className='text-center p-8 text-3xl font-bold'>Shopping Cart</h1>
        <LineItems data={data} />
        <div className='flex flex-col items-center md:items-end mt-8'>
          <p>Subtotal: {data.node.subtotalPriceV2.amount} {data.node.subtotalPriceV2.currencyCode}</p>
          <a href={data.node.webUrl} className='mt-4'>Checkout</a>
        </div>
      </div>
    </Layout>
  );
}

export default CartPage;