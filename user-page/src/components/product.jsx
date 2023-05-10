import { useEffect, useState } from 'react';
import { Link }  from 'react-router-dom';

const Product = ({product}) => {
const ProductID = product.ProductID

  return (
    <Link to={{pathName:'/item', state:{ProductID}}} className='border-2 m-10 opacity-1 transition duration-300 ease-in-out hover:opacity-70 hover:scale-110'>
      <div>
        <img className="h-96 w-96" src={"http://127.0.0.1/matura-backend/products/images/"+product.ProductID+".jpg"} alt="Slika produkta"/>
      </div>
        <div className="m-5 text-center text-2xl">{product.Name}</div>
        <div className="m-5 text-center">{product.Price}</div>
    </Link>
  );
}

export default Product;


