import React, { useRef, useState, useEffect } from 'react'
import './Rent.css'
import Card from '../../components/Card/Card'
import SideBar from '../../components/SideBar/SideBar'
import View from '../../components/View/View'
import CardsViewer from '../../components/CardsViewer/CardsViewer'
const Rent = () => {  
  // const [selectedCard, setSelectedCard] = useState();
  // const [fetched, setFetched] = useState(false);
  // const viewRef = useRef(null);

  // const [cardsData, setCardsData] = useState([]);
  // useEffect(() => {
  //   fetch('https://app.having.market/api/rent')
  //     .then(response => response.json())
  //     .then(rentData => {
  //       setFetched(true);
  //       setCardsData(rentData[0]);
  //     })
  //     .catch(error => console.error('Error fetching rent data:', error));
  // }, []);

  // useEffect(()=>{
  //   if(fetched){
  //     handelCardSelection(cardsData[0]);
  //   }
  // },[cardsData])

  // function handelCardSelection(cardData){
  //   setSelectedCard(cardData.id)
  //   viewRef.current = cardData;
  // }
  return (
    <div className='buy'>
    <SideBar />
    <CardsViewer action={"rent"}/>
    </div>
  )
}

export default Rent