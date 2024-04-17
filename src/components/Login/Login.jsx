import { useContext } from 'react'
import { FunctionsContext } from '../Context'
import './Login.css'
import axios from 'axios';
import Input from '../Input/Input';
const Login = ({close, onRegister}) => {
  const tokenChanger = useContext(FunctionsContext).changeToken;

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    };

    axios.post("https://backend.amaireg.com/api/login", data).then((e)=>{
      if(e.status === 200){
        const resToken = e.data.data.token
        tokenChanger(resToken, 200);
        close();
      }
    }).catch(function (error) {
      if (error.response.status === 401) {
        console.log("Unauthorized: Wrong password or account");
      } else {
        console.log("An error occurred:", error.message);
      }
    });
  }
  return (
    <form className='login' onSubmit={handleSubmit}>
      <Input id="name" type="email" name="email">Email</Input>
      
      <Input id="password" type="password" name="password">Password</Input>
      
      <p onClick={onRegister}>
        Register
      </p>

      <button className='login-btn' >
        Login
      </button>
    </form>
  )
}
export default Login