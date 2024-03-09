import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Shop from "./components/pages/shop/shop";
import SingleProduct from "./components/single-product/SingleProduct";
import CartPage from "./components/pages/cart/CartPage";
import Checkout from "./components/checkout/checkout";
import Success from "./components/checkout/stripe-checkout/success";
import Cancelled from "./components/checkout/stripe-checkout/cancelled";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/shop" Component={Shop} />
        <Route path="/shop/:id" Component={SingleProduct} />
        <Route path="/cart" Component={CartPage} />
        <Route path="/checkout" Component={Checkout} />
        <Route path="/success" Component={Success} />
        <Route path="/canceled" Component={Cancelled} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
