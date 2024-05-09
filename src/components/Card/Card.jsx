import React, { useState } from 'react'
import './card.css';
import dep from '../../imgs/dep2.jpg';
const Card = ({ data, ...props}) => {
  const myData = {
    ...data
  }
  // console.log(myData);
  const [loved,setLoved] = useState(myData.loved);

  function handleLocation () {
    
  }
  function handleLovedCard(state) {
    setLoved(state);
  }
  return (
    <div className='card' key={props.key}>
      <img src={dep} alt="" className="card-img"/>
      <div className="card-data">
        <h2>{myData.type}</h2>
        <p onClick={handleLocation}>{myData.city +" "+ myData.address} <i className="fa-solid fa-location-dot"></i></p>
        <h3>${myData.price}</h3>
        <div className="dep-features">
          {myData.bedrooms? <span><i className="fa-solid fa-bed"></i> {myData.bedrooms}</span> : null}
          {myData.bathrooms? <span><i className="fa-solid fa-bath"></i> {myData.bathrooms}</span> : null}
          {myData.size? <span><i className="fa-solid fa-ruler-combined"></i> {myData.size}</span> : null}
        </div>
        <div className="card-btns">
          <button className='card-view-btn'>
            <i className="fa-solid fa-phone"></i>
          </button>
          <button className='card-save-btn'>
          <i className="fa-solid fa-envelope"></i>
          </button>
        </div>
        <div className="love-icon">
          {loved ? (<i className="fa-solid fa-heart" onClick={() => handleLovedCard(false)}></i> ) 
          : (<i className="fa-regular fa-heart" onClick={() => handleLovedCard(true)}></i>)}
        </div>
      </div>

    </div>
  )
}

export default Card