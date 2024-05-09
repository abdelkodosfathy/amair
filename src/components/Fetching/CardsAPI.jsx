import React, { useState, useEffect } from 'react';
import Card from '../Card/Card'
const CardsAPI = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://rockteer.badracademyedu.com/api/property')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  if(data){
    console.log(data[0]);
  }
  return (
    <div>
      {data ? (
        <div>
          <h1>Data from API:</h1>
          {
            data[0].map((e)=>{
              return <Card data={e} key={e.id}/>;
            })
          }
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardsAPI;