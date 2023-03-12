import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { client } from '../../services';
import { LineItems } from './LineItem'


function CartPage() {
  const [ checkoutId, setCheckoutId ] = useState(localStorage.getItem('checkoutId'));
  
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
          lineItems(first: 100) {
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

  const { data, loading, error } = useQuery(CART_QUERY, {client});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Cart</h2>
      <p>Subtotal: {data.node.subtotalPriceV2.amount} {data.node.subtotalPriceV2.currencyCode}</p>
      <LineItems data={data} />
      <a href={data.node.webUrl}>Checkout</a>
    </div>
  );
}

export default CartPage;