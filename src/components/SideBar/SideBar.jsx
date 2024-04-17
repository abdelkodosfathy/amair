import React, { useContext, useState } from 'react'
import './SideBar.css';
import Combobox from '../Combobox/Combobox';
import Button from './Button';
import { DataContext } from '../Context';
const SideBar = () => {
  const darkMode = useContext(DataContext).darkMood;
  const [property,setProperty] = useState('house');

  function propertyType(prop){
    console.log(prop);
    setProperty(prop);
  }
  
  return (
    <div className={`side-bar ${darkMode? 'dark' : ''}`}>
      <div className="head">
        <h1>Filters</h1>
        <p>Reset</p>
      </div>
      <h3>Proprety type</h3>
      <div className="property-type">
        <Button onClicked={() => propertyType("house")} proprety="house" isActivated={property}>
          <i className="fa-solid fa-house"></i>
        </Button>
        <Button onClicked={() => propertyType("apartment")} proprety="apartment" isActivated={property}>
          <i className="fa-solid fa-building"></i>
        </Button>
        <Button onClicked={() => propertyType("commercial")} proprety="commercial" isActivated={property}>
          <i className="fa-solid fa-briefcase"></i>
        </Button>
        <Button onClicked={() => propertyType("land plat")} proprety="land plat" isActivated={property}>
          <i className="fa-solid fa-calendar-week"></i>
        </Button>
      </div>
      <div className="location">
        <h3>Location</h3>
        <Combobox/>
      </div>
      <div className="Price-range">
        <h3>Price Range</h3>
        <input type="range" name="" id="" />
        
      </div>
    </div>
  )
}

export default SideBar