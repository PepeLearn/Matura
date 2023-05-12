import Header from '../components/header'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'
import { json } from 'react-router'
import Cookies from 'js-cookie'

const Cart = () => {
  const [items, setItems] = useState(JSON.parse(Cookies.get("cart")))
  console.log(items);
  return (
    <div>
      bruh
      <div>
        {
          items.map((item, i) => ( // prikaze barve produktov. 
            <div key={i}>{item.color}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart;
