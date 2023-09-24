import React from 'react'
import Sidebar from './Sidebar'
import ProductList from './ProductList'
import '../styles/contant.scss'
const Contant = ({categories,products}) => {
  return (
    <div id='contant'>
      
     <Sidebar categories={categories}/>
     <ProductList products={products}/>
    </div>
  )
}

export default Contant