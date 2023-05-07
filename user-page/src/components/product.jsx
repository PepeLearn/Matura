import { useEffect, useState } from 'react';

const Product = ({product}) => {
  
  return (
    <div className='bg-red-500 font-bold'>
                <div>{product.Name}</div>
                <div>{product.Price}</div>
    </div>
  );
}

export default Product;
