import { useEffect, useState } from 'react';
import Product from '../components/product'
import Header from '../components/header'
import Footer from '../components/footer'
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import Filter from "../components/filter";


function Catalog() {
    const [filter, setFilter] = useState({tags:[]});
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1/matura-backend/database/database.php?getProductCatalog=true")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setProducts(data))
      },[])
      
      const updateFilter = e => { //on sumbit se izvede funkcije

        const temp = filter 
        filter.tags[e.target.name]=e.target.value

        setFilter((temp => [...temp]));
    }

      useEffect(() => {
        fetch("http://127.0.0.1/matura-backend/database/database.php?serchProductFilter=true", { 
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(filter),
          })
            .then((data) => data.json())
            .then((data) => {
                let date = Date.now() + 172800000; //(2 dni) exp time;
                document.cookie = "authorization=" + data.Authorization + ";expires="+ Date(date); // da toke v cookie
            })
            .catch((error) => {
              console.error('Error:', error);
            }); 
      },[filter]) //vsakic ko se filter changa fetchne producte in jih spremeni 

  return (
    <div className="h-auto">
        <Header/>
            <div className="text-center text-black no-underline">
                <div className=' mt-5'>Join us and get 30 day free shipping and returns.
                  <a className="text-black underline" href="/register"> Join us!</a>
                </div>
            </div>
            <div className="text-center no-underline mb-5">
                Up to 50% Off - end of the season
            </div>
            <form className='w-80 ml-20 mt-20'>   
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:gray-blue-500 focus:border-blue-500 bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-gray-500 dark:focus:border-blue-500" placeholder="Search..." required/>
                    <button type="submit" className="text-black absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Search</button>
                </div>
            </form>
            <div className="flex flex-row">
                <div className='w-1/6 pt-20'>
                    <Filter/>
                </div>
                <div className='w-5/6'>
                    <div className='font-bold mt-10 h-auto border-gray-600border-2 flex justify-center justify-items-center items-center pb-20'>
                    {
                        products.map((item) => (
                            <Product product={item}/>
                        ))
                    }
                    </div>
                    
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default Catalog;
