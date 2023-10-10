import Navi from "./components/Navi";
import { useEffect, useState } from "react";
import "./styles/app.scss";

import Contact from "./components/Contant";
import axios from "axios";
function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategorie, setSelectedCategorie] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getProducts = async () => {
    const response = await axios("http://localhost:5000/products");
    setProducts(response.data);
  };
  const getCategories = async () => {
    const response = await axios("http://localhost:5000/categories");
    setCategories(response.data);
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, [products]);

  return (
    <div>
      <Navi
        categories={categories}
        setSelectedCategorie={setSelectedCategorie}
      />
      <Contact
        categories={categories}
        products={products}
        setProducts={setProducts}
        selectedCategorie={selectedCategorie}
        setSelectedCategorie={setSelectedCategorie}
        setSelectedProduct={setSelectedProduct}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}

export default App;
