import React, { useState, useEffect } from 'react';

export const LineItems = ({ data }) => {
  const [state, setState] = useState(data);
  useEffect(() => {
    setState(data);
  }, [data]);

  return (
    <div>
      <table className='w-full text-left'>
        <tr className='border'>
          <th className='border-l border-r first:border-l-0 last:border-r-0 p-2'>Image</th>
          <th className='border-l border-r first:border-l-0 last:border-r-0 p-2'>Title</th>
          <th className='border-l border-r first:border-l-0 last:border-r-0 p-2'>Price</th>
          <th className='border-l border-r first:border-l-0 last:border-r-0 p-2'>Quantity</th>
        </tr>

        {state.node.lineItems?.edges.map(({ node }) => (
          <tr className='border'>
            <td className='border-l border-r first:border-l-0 last:border-r-0 p-2'><img src={node.variant.image.originalSrc} alt={node.variant.image.altText} /></td>
            <td className='border-l border-r first:border-l-0 last:border-r-0 p-2'>{node.title}</td>
            <td className='border-l border-r first:border-l-0 last:border-r-0 p-2'>{node.variant.priceV2.amount} {node.variant.priceV2.currencyCode}</td>
            <td className='border-l border-r first:border-l-0 last:border-r-0 p-2'>{node.quantity}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}