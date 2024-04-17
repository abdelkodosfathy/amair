import Card from '../components/Card/Card'
import SideBar from '../components/SideBar/SideBar'
import React from 'react';
import View from '../components/View/View';
const Home = ({cardsData}) => {
  return (
    
    <div className='home'>
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

export default Home