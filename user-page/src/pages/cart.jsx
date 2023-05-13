import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { json } from "react-router";
import Cookies from "js-cookie";

const Cart = () => {
  const [items, setItems] = useState(JSON.parse(Cookies.get("cart")));
  console.log(items);
  return (
    <div>
      <Header />
      <div className="bg-white">
        <h1 className="text-left m-20 text-3xl">Cart</h1>
      </div>
      <div className="h-auto">
        <div className="w-50% bg-white p-10 m-20 h-48 shadow-2xl border-2 border-black flex flex-row justify-between">
          {items &&
            items.map((item) => (
              <div className="flex flex-row">
                <div className="flex flex-col justify-center">
                  <img
                    className="w-24 h-24 object-contain"
                    src={`http://127.0.0.1/matura-backend/products/images/${item.id}.jpg`}
                    alt="Product Image"
                  />
                </div>
                <div className="flex flex-col justify-center ml-10">
                  {item.name}
                </div>
                <div className="flex flex-col justify-center">
                  <button className="text-center border m-4 p-1 w-1/2 border-gray-800">
                    +
                  </button>
                  <div className="text-center border p-1 border-gray-800">
                    {item.quantity}
                  </div>
                  <button className="text-center border m-4 p-1 w-1/2 border-gray-800">
                    -
                  </button>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-center">Remove from cart</div>
                  <button className="text-center border m-7 p-1 w-1/2 border-gray-800">
                    -
                  </button>
                </div>
                <div className="flex flex-col justify-center">
                  <div>Price:</div>
                  <div>100€</div>
                </div>
              </div>
            ))}
          <div className="m-20 text-right">
            <div className="mr-10 mb-10 text-2xl">Total: 1000€</div>
            <a href="" className="bg-orange-400 p-5">
              Proceed to checkout
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
