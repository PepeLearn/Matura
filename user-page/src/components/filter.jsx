import { useState, useEffect } from "react"
import { AiOutlineCaretDown } from 'react-icons/ai';
import { AiOutlineCaretUp } from 'react-icons/ai';

const Filter = () => {
  
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState(["pepe", "oof"]);
    const [SuperCategories, setSuperCategories] = useState(["pepe", "yikes", "bruh"]);

    useEffect(() => {
        fetch("http://127.0.0.1/matura-backend/database/database.php?getCategories=true&getSuperCategories=true", { 
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
          })
            .then((data) => data.json())
            .then((data) => {
                setCategories(data.categories);
                setSuperCategories(data.setSuperCategories);
            })
            .catch((error) => {
              console.error('Error:', error);
            }); 
      },[]) //vsakic ko se filter changa fetchne producte in jih spremeni 

    return (
    <div>
        <h1 className='text-center font-serif text-5xl'>Filter</h1>
        <div className="ml-20 relative">
            <button onClick={() => setIsOpen((prev) => !prev)} className="relative ml-5 mb-10 font-bold text-3xl">
            <div className="absolute">
                    {SuperCategories.map((item) => (
                        <div className="h-8 mb-20">{item}</div>
                    ))}
                </div>
            </button>
            {isOpen && (
                <div className="absolute ml-20 mb-20">
                    {categories.map((item) => (
                        <div>{item}</div>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default Filter;