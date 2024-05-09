import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
// import MyRegister from '../Register/MyRegister';
import './NavBar.css'
import SelectList from '../SelectList/SelectList';
const NavBar = () => {
  const LogModal = useRef();
  const regiterModal = useRef();
  
  function myFunction() {
    document.getElementById("list-roll-down").classList.toggle("is-active");
  }
  function handleLogInClick(){
    LogModal.current.open();
  }
  function handleRegClick(){
    LogModal.current.close();
    regiterModal.current.open();
  }
  return (
    <>
    <Modal ref={LogModal} >
      <Login onRegister = {handleRegClick}/>
    </Modal>
    {/* 
    <Modal ref={regiterModal} >
    <MyRegister />
    </Modal> */}
    <nav className='navbar'>
      <div className="logo">
      <h1><i className="fa-solid fa-city"></i> AMAIR</h1>
      </div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/buy"}>Buy</Link>
        </li>
        <li>
          <Link to={"/rent"}>Rent</Link>
        </li>
        <li>
          <Link to={"/sell"}>Sell</Link>
        </li>
        <li>
          <Link to={"/rentOut"}>Rent out</Link>
        </li>
      </ul>
      <div className="actions">
        <div className="search-bar">
          <input type="text" className="search-input" placeholder='Search...'/>
        </div>
        <button onClick={handleLogInClick}>Log in</button>
        <SelectList />
      </div>
    </nav>
    </>
  )
}

export default NavBar