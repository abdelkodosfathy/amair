import { useRef,useContext } from 'react'
import { Link } from 'react-router-dom';
import { FunctionsContext, DataContext } from '../Context';
import './NavBar.css'
import AuthForm from '../Login/AuthForm';
import SelectList from '../SelectList/SelectList';
import { useEffect } from 'react';
const NavBar = () => {
  const x = useContext(DataContext);

  const dark = useContext(DataContext).darkMode;
  const darkModeChanger = useContext(FunctionsContext).changeDarkMode;

  function darkMode() {
    if(dark){
      darkModeChanger(false);
    }else {
      darkModeChanger(true);
    }
  }

function handleLogout(){

}

  const AuthModal = useRef();
  function handleAuthInClick(){
    AuthModal.current.open();
  }
  return (
    <>
    <AuthForm ref={AuthModal}></AuthForm>
    <nav className='navbar'>
      <div className="logo">
      <h1><i className="fa-solid fa-city"></i> HAVING</h1>
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
      </ul>
      <div className="actions">
        <button className='dark-mood' onClick={darkMode}>{dark ? <i className="fa-solid fa-eye"></i> : <i className="fa-regular fa-eye"></i>}</button>
        {
          x.loginState.login ? <>
            <Link to={"/user"}><i className="fa-regular fa-user"></i></Link>
            <button onClick={handleLogout}> Logout</button> 
          </>
          : <button onClick={handleAuthInClick}>Login</button>
        }
        <SelectList />
      </div>
    </nav>
    </>
  )
}

export default NavBar