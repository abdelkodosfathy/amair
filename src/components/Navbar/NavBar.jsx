import { useRef,useContext } from 'react'
import { Link } from 'react-router-dom';
import { FunctionsContext, DataContext } from '../Context';
import './NavBar.css'
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import MyRegister from '../Register/MyRegister';
import SelectList from '../SelectList/SelectList';
const NavBar = () => {

  const LogModal = useRef();
  const regiterModal = useRef();
  const dark = useContext(DataContext).darkMode;
  const darkModeChanger = useContext(FunctionsContext).changeDarkMode;
  function darkMode() {
    if(dark){
      darkModeChanger(false);
    }else {
      darkModeChanger(true);
    }
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
      <Login close={()=> {LogModal.current.close()}} onRegister = {handleRegClick}/>
    </Modal>

    <Modal ref={regiterModal} >
      <MyRegister />
    </Modal>
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
        {/* <div className="search-bar">
          <input type="text" className="search-input" placeholder='Search...'/>
        </div> */}
        <button className='dark-mood' onClick={darkMode}>{dark ? <i className="fa-solid fa-eye"></i> : <i className="fa-regular fa-eye"></i>}</button>
        <button onClick={handleLogInClick}>Log in</button>
        <SelectList />
      </div>
    </nav>
    </>
  )
}

export default NavBar