import React, { useEffect, useState } from 'react'
import '../styles/sidebar.scss'
import axios from 'axios';
const Sidebar = ({categories,setProducts,products,setSelectedCategorie,selectedCategorie,selectedProduct,setSelectedProduct}) => {

  const [categorie,setCategorie]=useState(null);
  const [productName,setProductName]=useState("");
  const [quantitiy,setQuantitiy]=useState("");
  const [price,setPrice]=useState("");
  const [stok,setStok]=useState("");

  const addUbdateProduct=async(e)=>{
    e.preventDefault();
if(selectedProduct)
{
 await axios.put(`http://localhost:5000/products/${selectedProduct}`,{
    categoryId:Number(categorie),
    productName:productName,
    quantityPerUnit:quantitiy,
    unitPrice:price,
    unitsInStock:stok
})
setSelectedProduct(null)
}
else{
 const response =await axios.post("http://localhost:5000/products",{
    id:products.length+1,
    categoryId:Number(categorie),
    productName:productName,
    quantityPerUnit:quantitiy,
    unitPrice:price,
    unitsInStock:stok,
    isDeleted:false
})
if(response.status === 201){
  setProducts(prev=>[...prev,{
    id:products.length+1,
    categoryId:Number(categorie),
    productName:productName,
    quantityPerUnit:quantitiy,
    unitPrice:price,
    unitsInStock:stok,
    isDeleted:false
}]);
}

}
    setCategorie("");
    setProductName("");
    setQuantitiy("");
    setPrice("");
    setStok("");
    alert(selectedProduct?"Ürün başarıyla güncellendi":"Ürün başarılı bir şekilde eklendi");
  }

  const getSelectedProduct= async()=>{
    if(selectedProduct){
   const response= await axios.get(`http://localhost:5000/products/${selectedProduct}`);
   setCategorie(response.data.categoryId)
   setProductName(response.data.productName)
   setQuantitiy(response.data.quantityPerUnit)
   setPrice(response.data.unitPrice)
   setStok(response.data.unitsInStock)
  }
  }

  useEffect(()=>{
    getSelectedProduct();
  },
  [selectedProduct])

  return (
    <div id="sidebar-menu">
      <h1 style={{cursor:"pointer"}} onClick={()=>setSelectedCategorie(null)}>Categories</h1>
      <ul>
    {categories.map((categorie) => 
      <li className={selectedCategorie===categorie.id?"active":""} style={{cursor:"pointer"}} onClick={()=>setSelectedCategorie(categorie.id)} key={categorie.id}>{categorie.categoryName}</li>
    )}
      </ul>


  <form onSubmit={addUbdateProduct}>
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
    <input type='submit' value={selectedProduct?"Ubdate":"Add"}/>
  </form>
    </div>
    
  )
}

export default Sidebar