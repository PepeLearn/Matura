import { useState, useEffect } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";

const Filter = ({handleFilter}) => {
  const [filter, setFilter] = useState({ tags: [] });
  const [categories, setCategories] = useState(["pepe", "oof"]);
  const [openCategories, setOpenCategories] = useState([]);
  const [data,setData] = useState([]);
  const [superCategories, setSuperCategories] = useState([
    "women",
    "men",
    "kids",
  ]);
  const [openSuperCategory, setOpenSuperCategory] = useState(null);

  useEffect(() => {
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?getCategories=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      }
    ) 
      .then((data) => data.json())
      .then((response) => {
        setData(response);
        let temp = [];
        let temp2 = [];
        response.forEach((element) => {
          if (!temp.includes(element.superCategory)) {
            //pogleda ce ze obstaja
            temp.push(element.superCategory);
          }
          if (!temp2.includes(element.category)) {
            //pogleda ce ze obstaja
            temp2.push(element.category);
          }
        });
        setCategories(temp2);
        setSuperCategories(temp);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const toggleOpen = (superCategory) => {
    let temp2 = [];
    console.log(superCategory);
    data.forEach((element) => {
      if (!temp2.includes(element.category) &&(element.superCategory == superCategory)) {
        //pogleda ce ze obstaja
        console.log(element);
        temp2.push(element.category);
      }
    });
    setOpenCategories([...temp2]);
    console.log(temp2)
    setOpenSuperCategory((prev) => (prev === superCategory ? null : superCategory));
  };

  return (
    <div>
      <h1 className="text-center font-serif text-5xl">Filter</h1>
      <div className="ml-20 relative">
        <button className="relative ml-5 mb-10 font-bold text-3xl">
          <div className="absolute">
            {superCategories.map((superCategory) => (
              <div key={superCategory} className="h-8 mb-20">
                <div onClick={() => toggleOpen(superCategory)}>
                  {superCategory} {openSuperCategory === superCategory ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                </div>
                {openSuperCategory === superCategory && (
                  <div className="absolute ml-20 mb-20">
                    {openCategories.map((category) => (
                      <div key={category}>{category}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </button>
        <button onClick={() => {handleFilter(filter)}}></button>
      </div>
    </div>
  );
};

export default Filter;
