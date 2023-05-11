import Header from '../components/header'
import Footer from '../components/footer'
import { useEffect, useState } from 'react';
import { Routes, Route, useParams, useLocation, Link } from 'react-router-dom';
import Product from '../components/product';

const Item = () => {

  const location = useLocation();
  const [item, setItem] = useState({});
  const [product, setProduct] = useState(location.state.ProductID);
  const [categories, setCategories] = useState(["pepe", "oof"]);
  console.log(location.state);

useEffect(() => {
    let data = {
      productID:product
    }
    fetch("http://127.0.0.1/matura-backend/database/database.php?getProductVariants=true", { 
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((data) => data.json())
        .then((data) => {
            setItem(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        }); 
  },[]) //vsakic ko se filter changa fetchne producte in jih spremeni 

  return (
  <div>
    <header/>
    <div>
      <div>
      <div>{item.Name}</div>
      </div>
      <div>{item.Price}</div>
    </div>
    <footer/>
  </div>
  )
}

export default Item;