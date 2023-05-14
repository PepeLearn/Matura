import { useState, useEffect } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";

const Filter = () => {
  const [categories, setCategories] = useState([]);
  const [superCategories, setSuperCategories] = useState([]);
  const [openSuperCategory, setOpenSuperCategory] = useState(null);

  useEffect(() => {
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?getCategories=true&getSuperCategories=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((data) => data.json())
      .then((data) => {
        setCategories(data.categories);
        setSuperCategories(data.setSuperCategories);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const toggleOpen = (superCategory) => {
    setOpenSuperCategory((prev) =>
      prev === superCategory ? null : superCategory
    );
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
                  {superCategory}{" "}
                  {openSuperCategory === superCategory ? (
                    <AiOutlineCaretUp />
                  ) : (
                    <AiOutlineCaretDown />
                  )}
                </div>
                {openSuperCategory === superCategory && (
                  <div className="absolute ml-20 mb-20">
                    {categories.map((category) => (
                      <div key={category}>{category}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Filter;
