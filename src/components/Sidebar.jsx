import React from 'react'
import '../styles/sidebar.scss'
const Sidebar = ({categories}) => {
  return (
    <div id="sidebar-menu">
      <h1>Categories</h1>
      <ul>
    {categories.map((categorie) => 
      <li key={categorie.id}>{categorie.categoryName}</li>
    )}
  </ul>
    </div>
    
  )
}

export default Sidebar