import React from "react";
import "../styles/product-list.scss";

const ProductLis = ({ products }) => {
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
         </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
            </tr>
          ))}
        </tbody> 
      </table>
      </div>
  );
};

export default ProductLis;
