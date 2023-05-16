import Cookies from "js-cookie";
import { useRef } from "react";

const Header = () => {
  if (!Cookies.get("cart")) {
    var items = 0;
  } else {
    var items = JSON.parse(Cookies.get("cart"));
  }
  console.log(items);
  const num_of_items = items.length;

  return (
    <div className="flex flex-wrap justify-between p-5 shadow-2xl">
      <div className="w-full md:w-auto mb-5 md:mb-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Service_mark.svg/2560px-Service_mark.svg.png"
          alt=""
          height={100}
          width={100}
        />
      </div>
      <nav className="w-full md:w-auto mb-5 md:mb-0">
        <a className="block md:inline-block m-2 md:m-5 text-lg" href="/">
          Home
        </a>
        <a className="block md:inline-block m-2 md:m-5 text-lg" href="/catalog">
          Store
        </a>
        <a
          className="block md:inline-block m-2 md:m-5 text-lg"
          href="/#contact-form"
        >
          Contact Us
        </a>
      </nav>
      <div className="flex items-center">
        {Cookies.get("authorization") ? (
          <a className="m-2 md:m-5 text-lg" href="/account">
            My Profile
          </a>
        ) : (
          <a className="m-2 md:m-5 text-lg" href="/login">
            Login
          </a>
        )}
        <div className="relative">
          <a href="./cart" className="bg-amber-500 p-3 rounded-lg">
            Cart
          </a>
          <div className="absolute top-6 right-0 -mt-1 -mr-1 bg-white border-2 border-amber-500 text-xs px-1 rounded-full">
            {items ? num_of_items : 0}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
