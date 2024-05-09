import Card from '../components/Card/Card'
import SideBar from '../components/SideBar/SideBar'
import Axios from '../Axios'
import React, { useState, useEffect } from 'react';

const Home = ({cardsData}) => {
  console.log("home: " ,cardsData[0].id);

  return (
    <div className='home'>
      <SideBar />
      <div className='grid-container'>
          {cardsData[0].id ? 
            cardsData.map((e, index)=>{
              console.log(e);
              return <Card data={e} key={index}/>;
            })
          : <h1>Loading...</h1>}
      </div>
    </div>
  )
}

export default Home