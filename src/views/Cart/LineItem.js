import React, { useState, useEffect } from 'react';

export const LineItems = ({ data }) => {
  const [state, setState] = useState(data);
  useEffect(() => {
    setState(data);
  }, [data]);

  return (
    <div>
      {state.node.lineItems?.edges.map(({ node }) => (
        <div>
          <img src={node.variant.image.originalSrc} alt={node.variant.image.altText} />
          <p>{node.title}</p>
          <p>{node.variant.priceV2.amount} {node.variant.priceV2.currencyCode}</p>
          <p>Quantity: {node.quantity}</p>
        </div>
      ))}
    </div>
  );
}