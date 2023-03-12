import React from 'react';
import { client } from '../../services';
import { useState, useEffect } from "react";
import { gql } from "@apollo/client";

export const AddToCartButton = ({ product }) => {
  const [checkoutId, setCheckoutId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const checkoutIdFromStorage = localStorage.getItem('checkoutId');
    if (checkoutIdFromStorage) {
      setCheckoutId(checkoutIdFromStorage);
    }
  }, []);
  const handleQuantityChange = (event) => setQuantity(event.target.value);

  const handleAddToCart = async () => {
    if (!localStorage.getItem('checkoutId') && !checkoutId) {
      const { data } = await client.mutate({
        mutation:  gql`
          mutation {
            checkoutCreate(input: {}) {
              checkout {
                id
              }
            }
          }
        `,
      });
      setCheckoutId(data.checkoutCreate.checkout.id);
      localStorage.setItem('checkoutId', data.checkoutCreate.checkout.id);
      await client.mutate({
        mutation: gql`
          mutation CheckoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
            checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
              checkout {
                id
              }
            }
          }
        `,
        variables: {
          checkoutId: data.checkoutCreate.checkout.id,
          lineItems: [{
            variantId: product.variants.edges[0].node.id,
            quantity: parseInt(quantity),
          }],
        },
      });
    }
    if(checkoutId) {
      await client.mutate({
        mutation: gql`
          mutation CheckoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
            checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
              checkout {
                id
              }
            }
          }
        `,
        variables: {
          checkoutId: checkoutId,
          lineItems: [{
            variantId: product.variants.edges[0].node.id,
            quantity: parseInt(quantity),
          }],
        },
      });
    }
  }
  return (
    <div>
      <input id="quantity" type="number" name="quantity" value={quantity} onChange={handleQuantityChange}/>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};