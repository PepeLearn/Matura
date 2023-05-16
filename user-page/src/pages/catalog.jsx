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

  useEffect(() => {
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?getProductCatalog=true"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleFilter = (filter) => {
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?searchProductFilter=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filter),
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
      <div className="flex flex-col md:flex-row justify-between flex-wrap md:flex-nowrap px-4 md:px-8 lg:px-12 xl:px-16">
        <form className="w-full md:w-80 mt-4 md:mt-0">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
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
              required
            />
            <button
              type="submit"
              className="text-black absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Search
            </button>
          </div>
        </form>
        <Dropdown className="flex mt-4 md:mt-0" />
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-start">
        <div className="w-full md:w-1/4 pt-8 px-4 md:px-8 lg:px-12 xl:px-16">
          <Filter handleFilter={handleFilter} />
        </div>
        <div className="flex-grow mx-4 md:mx-8 lg:mx-12 xl:mx-16 mt-8 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 content-start">
            {products.map((item) => (
              <div className="flex justify-center" key={item.id}>
                <Product product={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Catalog;
