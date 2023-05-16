import { useState } from "react";

const Dropdown = ({handleFilter}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("Price");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSort = (sort) => {
    handleFilter({sort : sort})
    setSortOrder(sort);
    setIsOpen(false);
    // Do something with the selected sort order
  };
  

  return (
    <div className="relative inline-block text-left">
      <div className="flex justify-between">
        <button
          type="button"
          className="bg-white flex mt-20 w-[150px] focus:ring-0 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700"
          id="dropdown-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          Sort by {sortOrder}{" "}
          <svg
            className="-mr-1 ml-2 h-5 w-5 flex"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12l-6-6H3a1 1 0 00-.7 1.7l7 7a1 1 0 001.4 0l7-7A1 1 0 0017 6h-1.5l-6 6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => handleSort("Price Lowest")}
            >
              Price Lowest
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => handleSort("Price Highest")}
            >
              Price Highest
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => handleSort("Newest")}
            >
              Newest
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => handleSort("Relevant")}
            >
              Relevant
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
