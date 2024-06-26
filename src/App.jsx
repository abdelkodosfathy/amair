import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css'
import NavBar from './components/Navbar/NavBar'
import Home from './pages/Home';
import Rent from './pages/Rent';
import RentOut from './pages/RentOut';
import Sell from './pages/Sell';
import Buy from './pages/Buy';
import NotFound from './pages/NotFound';

function App() {
  const [data, setData] = useState([[]]);

  useEffect(() => {
    fetch('https://rockteer.badracademyedu.com/api/property')
      .then(response => response.json())
      .then(data => setData(data[0]))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home cardsData={data}/>}></Route>
          <Route path="/rent" element={<Rent/>}/>
          <Route path="/rentOut" element={<RentOut/>}/>
          <Route path="/sell" element={<Sell/>}/>
          <Route path="/buy" element={<Buy/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
