import React from 'react'
import './Login.css'
import axios from 'axios';
import Input from '../Input/Input';
const Login = ({onRegister}) => {

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    };
    axios.post("https://rockteer.badracademyedu.com/api/login", data).then((e)=>{console.log(e)})
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
    // .catch(err => console.log(err.response.status))
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