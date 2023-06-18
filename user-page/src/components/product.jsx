import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const ProductID = product.ProductID;

  return (
    <Link
      to="/item"
      state={{ ProductID: product.ProductID }}
      className="m-5 md:m-10 opacity-1 transition duration-300 ease-in-out hover:opacity-70 hover:scale-110 flex flex-col items-center"
    >
      <div>
        <img
          className="h-auto w-full object-contain"
          src={`http://127.0.0.1/matura-backend/products/images/${product.ProductID}.jpg`}
          alt="Slika produkta"
        />
      </div>
      <div className="mt-3 text-center text-lg md:text-2xl lg:text-xl xl:text-2xl">
        {product.Name}
      </div>
      <div className="mt-2 text-center text-sm md:text-base lg:text-lg xl:text-xl">
        {product.Price}
      </div>
    </Link>
  );
};

export default Product;
