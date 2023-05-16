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
    <div className="flex justify-between p-5 shadow-2xl">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Service_mark.svg/2560px-Service_mark.svg.png"
          alt=""
          height={100}
          width={100}
        />
      </div>
      <nav>
        <a className="m-5 text-lg" href="/">
          Home
        </a>
        <a className="m-5 text-lg" href="/catalog">
          Store
        </a>
        <a className="m-5 text-lg" href="/#contact-form">
          contact us
        </a>
      </nav>
      <div>
        {Cookies.get("authorization") ? (
          <a className="m-5 text-lg" href="/account">
            My profile
          </a>
        ) : (
          <a className="m-5 text-lg" href="/login">
            Login
          </a>
        )}
        <a href="./cart" className="bg-amber-500 p-3 rounded-lg">
          Cart
        </a>
        <div className="absolute top-10 right-3.5 border-2 border-amber-500 text-xs bg-white p-1 rounded-full">
          {items ? num_of_items : 0}
        </div>
      </div>
    </div>
  );
};

export default Header;
