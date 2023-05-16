import { useEffect, useState } from "react";
import Product from "../components/product";
import Header from "../components/header";
import Footer from "../components/footer";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import Filter from "../components/filter";
import Dropdown from "../components/Dropdown";

function Catalog() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchFilter, setSearchFilter] = useState({ tags: [], search: "" });

  useEffect(() => {
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?getProductCatalog=true"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSubmit = () => {
    console.log(searchFilter);
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?searchProductFilter=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchFilter),
      }
    )
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleFilter = (filter) => {
    console.log({ ...searchFilter, ...filter });
    setSearchFilter({ ...searchFilter, ...filter });
  };
  return (
    <div className="h-auto">
      <Header />
      <div className="text-center text-black no-underline">
        <div className="mt-5">
          Join us and get 30-day free shipping and returns.
          <a className="text-black underline" href="/register">
            Join us!
          </a>
        </div>
      </div>
      <div className="text-center no-underline mb-5">
        Up to 50% Off - End of the season
      </div>
      <div className="flex flex-col md:flex-row justify-center m-5 md:m-20">
        <div className="flex flex-1 justify-center">
          <div className="flex items-center w-full md:w-1/2">
            <label
              htmlFor="default-search"
              className="mr-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:gray-blue-500 focus:border-blue-500 bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-gray-500 dark:focus:border-blue-500"
                placeholder="Search..."
                onChange={(e) => {
                  setSearchFilter({ ...searchFilter, search: e.target.value });
                  console.log({ ...searchFilter, search: e.target.value });
                }}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 ml-20 mr-20 border-black"></div>
      <div className="text-right mr-20">
        <Dropdown handleFilter={handleFilter} />
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-start">
        <div className="w-full md:w-1/4 pt-8 px-4 md:px-8 lg:px-12 xl:px-16">
          <Filter handleFilter={handleFilter} />
        </div>
        <div className="m-5 md:m-20 w-full flex flex-wrap">
          {products.map((item, index) => (
            <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 p-2 sm:p-4">
              <div className="bg-white rounded-lg h-full shadow-md overflow-hidden">
                <Product product={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Catalog;
