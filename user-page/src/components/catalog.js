import { useEffect, useState } from 'react';

function Catalog() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1/matura-backend/database/database.php?getProductCatalog=true")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setProducts(data))
      },[])
  return (
    <div className='bg-red-500 font-bold'>
        {
            products.map((item) => (
                <>
                <div>{item.Name}</div>
                <div>{item.Price}</div>
                </>
            ))
        }
    </div>
  );
}

export default Catalog;
