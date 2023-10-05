import React from "react";
import logo from "../images/logo.png";
import "../styles/navi.scss";
const Navi = ({ categories,setSelectedCategorie }) => {
  return (
    <div id="navigate">
      <img src={logo} alt="logo" />
      <ul id="categories-menu">
        {categories.map((categorie) => 
          <li style={{cursor:"pointer"}} onClick={()=>setSelectedCategorie(categorie.id)} key={categorie.id}>{categorie.categoryName}</li>
        )}
      </ul>
    </div>
  );
};

export default Navi;
