import React, { useState } from 'react'
import "./style.css";
import Menu from "../menuApi"
import MenuCard from "./menuCard"

const Restaurant = () => {

    const [menuData, setData]= useState(Menu);

    const filterItem=(category)=>{
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category ===category;
        });
        setData(updatedList);
    }
    

  return <>
  <nav className="navbar">
    <div className="btn-group">
        <button className="btn-group__item" onClick={()=>filterItem ("Breakfast")}>Breakfast</button>
        <button className="btn-group__item" onClick={()=>filterItem ("Lunch")}>Lunch</button>
        <button className="btn-group__item" onClick={()=>filterItem ("Evening")}>Evening</button>
        <button className="btn-group__item" onClick={()=>filterItem ("Dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={()=> setData(Menu)}>All</button>
    </div>
  </nav>
  <MenuCard menuData={menuData}/>
  
  </>
}

export default Restaurant
