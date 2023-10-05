import Navi from "./components/Navi";
import { useEffect, useState } from "react";
import "./styles/app.scss";

import Contact from "./components/Contant";
function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategorie,setSelectedCategorie]=useState(null);

  const getData = async () => {
    const response = await fetch("http://localhost:5000/data");
    const data = await response.json();
    setProducts(data.products);
    setCategories(data.categories);
  };

  

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navi categories={categories}  setSelectedCategorie={setSelectedCategorie}/>
      <Contact categories={categories} products={products} setProducts={setProducts} selectedCategorie={selectedCategorie} setSelectedCategorie={setSelectedCategorie} />
    </div>
  );
}

export default App;
