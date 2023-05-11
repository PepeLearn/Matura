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


  if (item.Variants) {

    return (
      <div>
        <Header/>
        <div className='h-auto'>
            <div className='flex flex-row border-solid justify-between p-20'>
              <div className='ml-20 border-solid border-2'>
                <img className="h-96 w-96 m-20" src={"http://127.0.0.1/matura-backend/products/images/"+product+".jpg"} alt="" />
              </div>
              <div className='mr-20 flex border-2 grow justify-items-center flex-col m-20'>
                <div className='m-5 text-4xl'>Product name: {item.Name}</div>
                <div className='m-5 text-2xl'>Price: {item.Price}</div>
                <div className='m-5 text-2xl'>Describtion: {item.Desc}</div>
                <div className='m-5 text-2xl border-2 w-[155px]'>
                  <select id="countries">
                    <option selected>Select a size</option>
                    {
                      item.Variants.map((variant) => (
                        <option className='m-5 border-2 border-green-500'>{variant.Size}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
            </div>
        </div>
        <Footer/>
      </div>
      )
    }
  }
  
  export default Item;