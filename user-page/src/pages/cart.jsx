import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { json } from "react-router";
import Cookies from "js-cookie";

const Cart = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  const clearCart = () => {
    Cookies.remove("cart");
    setItems([]);
  };

  useEffect(() => {
    let cart = null;
    if ((cart = Cookies.get("cart"))) {
      setItems(JSON.parse(cart));
    }
  }, []);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const increaseQuantity = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    Cookies.set("cart", JSON.stringify(newItems));
    setItems(newItems);
  };

  const decreaseQuantity = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity--;
      Cookies.set("cart", JSON.stringify(newItems));
      setItems(newItems);
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-white flex justify-between border-red-400">
        <h1 className="text-left m-20 text-6xl">
          {items.length > 0
            ? "Items in your cart"
            : "You have 0 items added to your cart"}
        </h1>
        {items.length > 0 && (
          <div className="m-20 text-2xl">
            <button
              className="p-5 bg-orange-300 rounded-lg"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
      {items.map((item, index) => (
        <div className="bg-white h-auto">
          <div className="w-5/5 border-2 border-black flex h-40 m-20 justify-between justify-items-center items-center p-5">
            <div className="flex justify-center justify-items-cente">
              <img
                className="w-24 h-24"
                src={`http://127.0.0.1/matura-backend/products/images/${item.id}.jpg`}
                alt="Item_in_cart"
              />
            </div>
            <div>
              <div>{item.name}</div>
            </div>
            <div className="flex flex-col justify-center justify-items-center">
              <button className="" onClick={() => increaseQuantity(index)}>
                +
              </button>
              <div>{item.quantity}</div>
              <button className="" onClick={() => decreaseQuantity(index)}>
                -
              </button>
            </div>
            <div className="flex justify-center justify-items-center">
              <div>
                <button
                  className="border-2 border-black p-2"
                  onClick={() => {
                    const newItems = [...items];
                    newItems.splice(index, 1);
                    Cookies.set("cart", JSON.stringify(newItems));
                    setItems(newItems);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
            <div>
              <div>{item.price}€</div>
            </div>
          </div>
        </div>
      ))}
      {items.length > 0 && (
        <div className="m-20 text-right">
          <p>Total: {total}€</p>
        </div>
      )}
      {items.length > 0 && (
        <div className="m-20 text-right">
          <a className="p-5 bg-orange-300 rounded-lg" href="">
            Proceed to checkout
          </a>
        </div>
      )}
      {items.length ? (
        <div>
          <Footer />
        </div>
      ) : (
        <div className="fixed bottom-0 w-full">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Cart;
