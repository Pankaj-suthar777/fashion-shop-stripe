import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Shop from "./components/pages/shop/shop";
import SingleProduct from "./components/single-product/SingleProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/shop" Component={Shop} />
        <Route path="/shop/:id" Component={SingleProduct} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
