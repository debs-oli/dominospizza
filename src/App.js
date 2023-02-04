import { useState } from "react";
import "./App.css";
import Highlights from "./Components/Highlights";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="App">
      <Navbar toggleProducts={setShowProducts} />
      {!showProducts && <Highlights toggleProducts={setShowProducts} />}
      {showProducts && <Products />}
    </div>
  );
}

export default App;
