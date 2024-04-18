import React from 'react'
import Card from '../components/Card/Card'
import SideBar from '../components/SideBar/SideBar'
import View from '../components/View/View';

const Buy = ({cardsData}) => {
  return (
    <div className='buy'>
    <SideBar />
    <div className='grid-container'>
        {cardsData[0].id ? 
          cardsData.map((e, index)=>{
            // console.log(e);
            return <Card data={e} key={index}/>;
          })
          : <h1>Loading...</h1>}
    </div>
    <View>
    </View>
    </div>
  )
}

export default Buy