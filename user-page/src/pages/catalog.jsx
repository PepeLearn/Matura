import { useEffect, useState } from 'react';
import Product from '../components/product'
import Header from '../components/header'
import Footer from '../components/footer'

function Catalog() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1/matura-backend/database/database.php?getProductCatalog=true")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setProducts(data))
      },[])
  return (
    <div>
        <Header/>
            <div className="text-center text-black no-underline">
                <div className=' mt-5'>Join us and get 30 day free shipping and returns.
                  <a className="text-black underline" href="/register"> Join us!</a>
                </div>
            </div>
            <div className="text-center text-black no-underline mb-5">
                Up to 50% Off - end of the season
            </div>
            <div>
                <h1 className='text-center text-black font-serif text-5xl pt-20'>Filter</h1>

            </div>
        <Footer/>
    </div>
  );
}

export default Catalog;
