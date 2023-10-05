import React, { useState } from 'react'
import '../styles/sidebar.scss'
const Sidebar = ({categories,setProducts,products,setSelectedCategorie}) => {

  const [categorie,setCategorie]=useState(null);
  const [productName,setProductName]=useState("");
  const [quantitiy,setQuantitiy]=useState("");
  const [price,setPrice]=useState("");
  const [stok,setStok]=useState("");

  const addProduct=(e)=>{
    e.preventDefault();
    setProducts(
      [...products,{
          id:products.length+1,
          categoryId:Number(categorie),
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
      <h1 style={{cursor:"pointer"}} onClick={()=>setSelectedCategorie(null)}>Categories</h1>
      <ul>
    {categories.map((categorie) => 
      <li style={{cursor:"pointer"}} onClick={()=>setSelectedCategorie(categorie.id)} key={categorie.id}>{categorie.categoryName}</li>
    )}
      </ul>


  <form onSubmit={addProduct}>
    <select value={categorie} onChange={(e)=>{setCategorie(e.target.value)}} required>
      <option value="">Kategori seçiniz</option>
    {categories.map((categorie) => 
      <option value={categorie.id} key={categorie.id}>{categorie.categoryName}</option>
    )}
    </select>
    <input value={productName} placeholder='Product Name' type='text' onChange={(e)=>{setProductName(e.target.value)}} required/>
    <input value={quantitiy} placeholder='Qantitiy Per Unit' type='text' onChange={(e)=>{setQuantitiy(e.target.value)}} required/>
    <input value={price} placeholder='Unit Price' type='number' onChange={(e)=>{setPrice(e.target.value)}} required/>
    <input value={stok} placeholder='Units In Stock' type='number' onChange={(e)=>{setStok(e.target.value)}} required />
    <input type='submit' value="Ekle"/>
  </form>
    </div>
    
  )
}

export default Sidebar