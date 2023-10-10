import Sidebar from './Sidebar'
import ProductList from './ProductList'
import '../styles/contant.scss'
const Contant = ({setProducts,categories,products,setSelectedCategorie,selectedCategorie,setSelectedProduct,selectedProduct}) => {
  return (
    <div id='contant'>
      
     <Sidebar products={products} categories={categories} setProducts={setProducts} setSelectedCategorie={setSelectedCategorie} selectedCategorie={selectedCategorie} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
     
     <ProductList setProducts={setProducts} products={selectedCategorie!==null?products.filter(product=>product.categoryId===selectedCategorie):products} setSelectedProduct={setSelectedProduct} />
    </div>
  )
}

export default Contant