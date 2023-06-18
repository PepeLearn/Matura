import React, { useState, useEffect } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import MultiRangeSlider from "../components/RangeSlider";
import { RiCheckLine } from "react-icons/ri";

const Filter = ({ handleFilter,handleSubmit,clearFilter }) => {
  const [slider, setSlider] = useState({
    minPrice: 1,
    maxPrice: 100,
  });

  const [filter, setFilter] = useState({ tags: [] });
  const [openCategories, setOpenCategories] = useState([]);
  const [data, setData] = useState([]);
  const [superCategories, setSuperCategories] = useState([
    "women",
    "men",
    "kids",
  ]);
  const [openSuperCategory, setOpenSuperCategory] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  useEffect(() => {
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?getFilterData=true",
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
        response.categories.forEach((element) => {
          if (!temp.includes(element.superCategory)) {
            //pogleda ce ze obstaja
            temp.push(element.superCategory);
          }
          if (!temp2.includes(element.category)) {
            //pogleda ce ze obstaja
            temp2.push(element.category);
          }
        });
        setSuperCategories(temp);
        setSlider({
          maxPrice: response.maxPrice,
          minPrice: response.minPrice,
        })
        console.log(response.maxPrice,response.minPrice);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSelectedCategory = (category) => {
    handleFilter({ superCategory: openSuperCategory, category: category });
  };

  const handleTag = (tag) => {
    var temp = filter;

    const index = temp.tags.indexOf(tag);
    if (index > -1) {
      // only splice array when item is found
      temp.tags.splice(index, 1); // 2nd parameter means remove one item only
    } else {
      temp.tags.push(tag);
    }
    setFilter({ ...filter, tags: temp.tags });
    handleFilter({ tags: temp.tags });
  };

  const toggleOpen = (superCategory) => {
    let temp2 = [];
    console.log(superCategory);
    data.categories.forEach((element) => {
      if (
        !temp2.includes(element.category) &&
        element.superCategory === superCategory
      ) {
        //pogleda ce ze obstaja
        console.log(element);
        temp2.push(element.category);
      }
    });
    setOpenCategories([...temp2]);
    console.log(temp2);
    setOpenSuperCategory((prev) =>
      prev === superCategory ? null : superCategory
    );
  };
  const handleClearFilter = () => {
    clearFilter();
    setFilter({ tags: []});
  }
  if (data.colors) {
    return (
      <div>
        <div className="flex justify-between ml-10 ">
          <h1 className="font-serif text-5xl">Filter</h1>
          <div>
            <button className="font-serif text-5xl">+</button>
          </div>
        </div>
        <div className="mt-10  ml-10 flex flex-col">
          <button className="pt-2 pb-2 pl-1 pr-1 mb-5 rounded-lg text-lg bg-white border border-black" onClick={handleSubmit}>
            Submit filter
          </button>
          <button className="pt-2 pb-2 pl-1 pr-1 mt-5 rounded-lg text-lg bg-black text-white" onClick={handleClearFilter}>
            Clear filter
          </button>
        </div>
        <div className="ml-10 mt-10 -mb-5 text-lg">Gender</div>
        <div className="w-68 ml-10 mt-5">
          <button className="w-full border-2 text-2xl">
            <div className="mt-2">
              {superCategories.map((superCategory) => (
                <div key={superCategory} className="m-2">
                  <div
                    className="flex justify-between"
                    onClick={() => toggleOpen(superCategory)}
                  >
                    {superCategory}{" "}
                    {openSuperCategory === superCategory ? (
                      <AiOutlineCaretUp />
                    ) : (
                      <AiOutlineCaretDown />
                    )}
                  </div>
                  {openSuperCategory === superCategory && (
                    <div className="text-left mt-2 ml-10 text-lg">
                      {openCategories.map((category) => (
                        <div>
                          <button
                            key={category}
                            value={category}
                            onClick={(e) => {
                              handleSelectedCategory(e.target.value);
                            }}
                          >
                            {category}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </button>
        </div>
        <div className="ml-10 mt-10 -mb-5 text-lg">Colors</div>
        <div className="w-68 ml-10 mt-5">
          <div>
            <div className="flex flex-row justify-between p-5 border-2">
              <div className="flex flex-col">
                <div>
                  {data.colors.map((color, index) => (
                    <div>
                      <label className="flex items-center">
                        <input
                          className="hidden"
                          type="checkbox"
                          name={color}
                          value={color}
                          checked={filter.tags.includes(color)}
                          onChange={(e) => handleTag(e.target.value)}
                        />
                        <div className={`checkbox-icon ${color}-checkbox-icon`}>
                          {filter.tags.includes(color) && (
                            <RiCheckLine
                              className={`checkmark ${color}-checkmark`}
                            />
                          )}
                        </div>
                        <span className="ml-2">{color}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <MultiRangeSlider
          min={Math.round(slider.minPrice)}
          max={Math.round(slider.maxPrice)}
          onChange={handleFilter} //on change
        />
      </div>
    );
  }
};

export default Filter;
