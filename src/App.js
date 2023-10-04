import Navi from "./components/Navi";
import { useEffect, useState } from "react";
import "./styles/app.scss";

import Contact from "./components/Contant";
function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();
    setProducts(data);
  };

  const getCategories = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div>
      <Navi categories={categories} />
      <Contact categories={categories} products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
