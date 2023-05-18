import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Catalog from "./pages/catalog";
import Cart from "./pages/cart";
import Account from "./pages/account";
import Main from "./pages/main";
import Item from "./pages/item";
import PrivateRoutes from "./components/PrivateRoutes";
import Checkout from "./pages/checkout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/account" element={<Account />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/item" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
