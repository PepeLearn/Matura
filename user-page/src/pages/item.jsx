import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { Routes, Route, useParams, useLocation, Link } from "react-router-dom";
import Product from "../components/product";
import Cookies from "js-cookie";
import Ratings from "../components/ratings";
import Star from "../components/star";

const Item = () => {
  const location = useLocation();
  const [item, setItem] = useState({});
  const [product, setProduct] = useState(location.state.ProductID);
  const [selectedSize, setSelectedSize] = useState("");
  const [availableColors, setAvailableColors] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    let data = {
      productID: product,
    };
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?getProductVariants=true",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((data) => data.json())
      .then((data) => {
        let sizes = [];
        setItem(data);
        data.Variants.forEach((element) => {
          if (!sizes.includes(element.Size)) {
            //pogleda ce ze obstaja
            sizes.push(element.Size);
          }
        });
        setAvailableSizes(sizes);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSelectedColor = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    let colors = [];
    setSelectedSize(e.target.value);
    item.Variants.forEach((element) => {
      if (element.Size === e.target.value) {
        colors.push(element.Color);
      }
    });
    setAvailableColors(colors);
  };

  const HandleCart = () => {
    let lol = true;
    let prevProducts = Cookies.get("cart");
    if (!selectedSize || !selectedColor) {
      console.log("lol");
      return;
    }
    let AddedProduct = {
      id: product,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
      price: item.Price,
      name: item.Name,
    };
    if (prevProducts) {
      prevProducts = JSON.parse(prevProducts);
      prevProducts.forEach((element) => {
        if (
          element.size === AddedProduct.size &&
          element.color === AddedProduct.color
        ) {
          element.quantity++;
          let date = Date.now() + 172800000; //2 dni
          Cookies.set("cart", JSON.stringify(prevProducts), { expires: date });
          console.log(prevProducts);
          console.log("je good");
          lol = false;
        }
      });
      AddedProduct = [...prevProducts, AddedProduct]; //json pars vse podatke da kot object v array in se obstojeci objoect
    } else {
      AddedProduct = [AddedProduct];
    }
    if (lol) {
      let date = Date.now() + 172800000; //2 dni
      Cookies.set("cart", JSON.stringify(AddedProduct), { expires: date });
      console.log(AddedProduct);
      console.log("bruh-ni vredi");
    }
  };

  const handleRating = (rating) => {
    setRating(rating);
  };

  if (item.Variants) {
    const filledStars = Math.floor(rating / 10);
    const emptyStars = 5 - filledStars;
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <div className="flex border-solid justify-between p-20">
            <div className="ml-20 border-solid w-2/3 flex justify-center items-center border-2">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  className="object-contain h-full w-5/6 mx-auto"
                  src={
                    "http://127.0.0.1/matura-backend/products/images/" +
                    product +
                    ".jpg"
                  }
                  alt="Slika produkta"
                />
              </div>
            </div>
            <div className="w-3/4 mr-20 grow justify-items-center flex-col m-20">
              <div className="m-5 text-3xl">Product name: {item.Name}</div>
              <div className="m-5 text-lg">
                Price: <span className="text-red-500">{item.Price}€</span>
              </div>
              <div className="m-5 text-m text-justify">
                Description: {item.Desc}
              </div>
              <div className="m-5">
                Rating:
                {[...Array(filledStars)].map((_, index) => (
                  <Star key={index} filled={true} />
                ))}
                {[...Array(emptyStars)].map((_, index) => (
                  <Star key={index} filled={false} />
                ))}
              </div>
              <div className=" text-lg w-96 flex justify-between">
                <select
                  onChange={handleSizeChange}
                  id="size"
                  className="m-5 bg-orange-200 border-none rounded-xl"
                >
                  <option selected>Select a size</option>
                  {availableSizes.map((Size) => (
                    <option className="m-5" value={Size}>
                      {Size}
                    </option>
                  ))}
                </select>
                <select
                  id="color"
                  onChange={handleSelectedColor}
                  className="m-5 bg-orange-200 border-none rounded-xl"
                >
                  <option selected>Select a color</option>
                  {availableColors.map((color) => (
                    <option className="m-5 border-2">{color}</option>
                  ))}
                </select>
              </div>
              <button
                className="bg-black text-orange-400 h-[7vh] w-[20vw] rounded-xl ml-5 mt-20 hover:opacity-59"
                onClick={HandleCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <Ratings handleRating={handleRating} productID={product} />
        <Footer />
      </div>
    );
  }
};

export default Item;
