import React from 'react'
import {motion} from "framer-motion";
import  { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = (props) => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log('Login successful');
      const token = response.data.token;
      localStorage.setItem('token', token);
      props.setLoggedIn(true);
      toast.success("Welcome To Rent N Ride !")
    }
   
    catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Login failed', error.response.data.message);
      } else {
        console.error('Login failed. Unable to get error details.');
      }
    }
    
    navigate("/")
  };



  return (
    <>
    <div id='login'>
      <form onSubmit={handleLogin} >
        <motion.h1
         initial={{
    y : "-100%",
    opacity :0 ,
  }}
  whileInView={{
    y :"0",
    opacity:"1",
  }}>
    Login Your Account
    </motion.h1>
        <input type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='Email'
         required />

        <input type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'
         required />

        < motion.button
        type='submit'
         initial={{
    y : "-100%",
    opacity :0 ,
  }}
  whileInView={{
    y :"0",
    opacity:"1",
  }}>Login</motion.button>
      </form>
      
     <div><p>Register Yourself First        <Link to='/signup'>SIGN UP</Link></p></div>

    </div>
      
    
    </>

      
)
}


export default Login