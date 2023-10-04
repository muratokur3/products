import React, { useState } from 'react'
import '../styles/sidebar.scss'
const Sidebar = ({categories,setProducts,products}) => {

  const [categorie,setCategorie]=useState("");
  const [productName,setProductName]=useState("");
  const [quantitiy,setQuantitiy]=useState("");
  const [price,setPrice]=useState("");
  const [stok,setStok]=useState("");

  const addProduct=(e)=>{
    e.preventDefault()
    let categorieId=null;
    categories.map(
      (cate)=>cate.categoryName===categorie?categorieId=cate.id:cate
    )
    setProducts(
      [...products,{
          id:products.length+1,
          categoryId:categorieId,
          productName:productName,
          quantityPerUnit:quantitiy,
          unitPrice:price,
          unitsInStock:stok,
          isDeleted:false
      }]
    )
    setCategorie("");
    setProductName("");
    setQuantitiy("");
    setPrice("");
    setStok("");
    alert("ürün başarılı bir şekilde eklendi");
    
  }

  return (
    <div id="sidebar-menu">
      <h1>Categories</h1>
      <ul>
    {categories.map((categorie) => 
      <li key={categorie.id}>{categorie.categoryName}</li>
    )}
      </ul>



  <form onSubmit={addProduct}>
    <select value={categorie} onChange={(e)=>{setCategorie(e.target.value)}} required>
      <option value="" selected>Kategori seçiniz</option>
    {categories.map((categorie) => 
      <option value={categorie.categoryName} key={categorie.id}>{categorie.categoryName}</option>
    )}
    </select>
    <input value={productName} placeholder='Product Name' type='text' onChange={(e)=>{setProductName(e.target.value)}} required/>
    <input value={quantitiy} placeholder='Qantitiy Per Unit' type='text' onChange={(e)=>{setQuantitiy(e.target.value)}} required/>
    <input value={price} placeholder='Unit Price' type='number' onChange={(e)=>{setPrice(e.target.value)}} required/>
    <input value={stok} placeholder='Units In Stock' type='number' onChange={(e)=>{setStok(e.target.value)}} required/>
    <input type='submit' value="Ekle"/>
  </form>
    </div>
    
  )
}

export default Sidebar