import Navi from './components/Navi'
import {useEffect, useState} from 'react';
import './styles/app.scss'
import data from './Data/Data'
import Contact from './components/Contant'
function App() {
  const [categories,setCategories]=useState(data.categories)
  const [products,setProducts]=useState(data.products)

  
 

  return (
    <div>
      <Navi categories={categories}/>
      <Contact categories={categories} products={products}/>
      
    </div>
  );
}

export default App;
