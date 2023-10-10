import React from "react";
import "../styles/product-list.scss";
import axios from "axios";

const ProductLis = ({ products,setProducts,setSelectedProduct }) => {
 const deleteProduct=async(id)=>{
   const response= await axios.patch(`http://localhost:5000/products/${id}`,{isDeleted:true})
   if(response.status===200)
   {
    setProducts((prev)=>prev.filter(stategelen=>stategelen.id!==id))
   }
  }
  const ubdateProduct=(id)=>{
    setSelectedProduct(id)
  }
  return (
    <div id="product-list">
      
       <table>
        <thead>
         <tr>
         <th>id</th>
          <th>Product Name</th>
          <th>Qantitiy Per Unit</th>
          <th>Unit Price</th>
          <th>Units In Stock</th>
          <th>Operation</th>
         </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            !product.isDeleted&&
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <td><button onClick={()=>deleteProduct(product.id)}>Delete</button><button onClick={()=>ubdateProduct(product.id)}>Ubdate</button></td>
            </tr>
          )).reverse()}
        </tbody> 
      </table>
      </div>
  );
};

export default ProductLis;
