import React from 'react'
import Sidebar from './Sidebar'
import ProductList from './ProductList'
import '../styles/contant.scss'
const Contant = ({setProducts,categories,products}) => {
  return (
    <div id='contant'>
      
     <Sidebar products={products} categories={categories} setProducts={setProducts}/>
     <ProductList products={products}/>
    </div>
  )
}

export default Contant