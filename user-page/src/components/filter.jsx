import { useState, useEffect } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import RangeSlider from "../components/RangeSlider";

const Filter = ({ handleFilter }) => {
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  const handleSelectedCategory = (category) => {
    const temp = filter;
    temp.category = category;
    console.log(temp);
    setFilter({ ...temp, superCategory: openSuperCategory });
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
    console.log(temp);
    setFilter({ ...filter, tags: temp.tags });
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
  if (data.colors) {
    return (
      <div>
        <div className="flex justify-between ml-10">
          <h1 className="font-serif text-5xl">Filter</h1>
          <button className="font-serif text-5xl">+</button>
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
                  {data.colors.map((color, bruh) => (
                    <div>
                      <button
                        style={{ backgroundColor: color }}
                        className={
                          "bg-" + color + "-500 text-white focus:ring-0"
                        }
                        type="checkbox"
                        id={bruh}
                        name={color}
                        value={color}
                        onClick={(e) => handleTag(e.target.value)}
                      />
                      <label className="p-2" for="vehicle1">
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <RangeSlider />
      </div>
    );
  }
};

export default Filter;
