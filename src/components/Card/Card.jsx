import { useState, useContext } from 'react'
import axios from 'axios';
import './card.css';
import { DataContext } from '../Context'
import dep from '../../imgs/dep2.jpg';

const Card = ({ data, ...props}) => {
  const darkMode = useContext(DataContext).darkMode;
  const myData = {
    ...data,
    darkMode
  }
  const [loved,setLoved] = useState(myData.loved);
  const loginData = useContext(DataContext).loginState;

  function handleLovedCard(state , cardId) {
    if(loginData.login){
      setLoved(state);
      const token = loginData.token;
      axios({
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          'Authorization': `Bearer ${token}`
        },
        method: `${state? 'post' : 'get'}`,
        baseURL: 'https://backend.amaireg.com/api/',
        url: `${state? 'fav' : 'delfav/'+cardId}`,
        data: {
          task_id: `${cardId}`,
        }
      }).then(e => {
        console.log(e);
      }).catch((e)=>{
        console.log(e);
      });
    } else {
      alert("u are not loged in")
    }
  }
  function handleLocation () {
    // navigate to location
  }
  function handleCardClicked(){
    // console.log(myData)
  }
  return (
    <div className={`card ${myData.darkMode? 'dark' : ''}`} key={props.key} onClick={handleCardClicked}>
      <img src={dep} alt="" className="card-img"/>
      <div className="card-data">
        <h2>{myData.type}</h2>
        <div onClick={handleLocation}>
          <p>{myData.city}</p>
          <p>{myData.address}</p>
        </div>
        <h3>${myData.price}</h3>
        <div className="dep-features">
          {myData.bedrooms? <span><i className="fa-solid fa-bed"></i> {myData.bedrooms}</span> : null}
          {myData.bathrooms? <span><i className="fa-solid fa-bath"></i> {myData.bathrooms}</span> : null}
          {myData.size? <span><i className="fa-solid fa-ruler-combined"></i> {myData.size}</span> : null}
        </div>
        <div className="card-btns">
          <button className='card-phone-btn'>
            <i className="fa-solid fa-phone"></i>
          </button>
          <button className='card-mail-btn'>
            <i className="fa-solid fa-envelope"></i>
          </button>
        </div>
        <div className="love-icon">
          {loved ? (<i className="fa-solid fa-heart" onClick={() => handleLovedCard(false, myData.id)}></i> ) 
          : (<i className="fa-regular fa-heart" onClick={() => handleLovedCard(true, myData.id)}></i>)}
          <i className="fa-solid fa-location-dot"></i>
        </div>
      </div>
    </div>
  )
}
export default Card