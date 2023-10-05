import Sidebar from './Sidebar'
import ProductList from './ProductList'
import '../styles/contant.scss'
const Contant = ({setProducts,categories,products,setSelectedCategorie,selectedCategorie}) => {
  return (
    <div id='contant'>
      
     <Sidebar products={products} categories={categories} setProducts={setProducts} setSelectedCategorie={setSelectedCategorie} selectedCategorie={selectedCategorie}/>
     {}
     <ProductList products={selectedCategorie!==null?products.filter(product=>product.categoryId===selectedCategorie):products} />
    </div>
  )
}

export default Contant