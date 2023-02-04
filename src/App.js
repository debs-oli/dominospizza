import { useState } from "react";
import "./App.css";
import Highlights from "./Components/Highlights";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((currentCart) => {
      const cartCopy = [...currentCart];
      cartCopy.push(product);
      return cartCopy;
    });
  }

  return (
    <div className="App">
      <Navbar toggleProducts={setShowProducts} cart={cart} />
      {!showProducts && <Highlights toggleProducts={setShowProducts} />}
      {showProducts && <Products addToCart={addToCart} />}
    </div>
  );
}

export default App;
