import React, { useState } from 'react'
import {motion} from "framer-motion";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SignUp = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("");

  
  const handleRegister = async (e) => {

    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', { name, email, password });
      console.log('User registered successfully');
      toast.success("SignUp Successfully")
    }
    catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Registration failed', error.response.data.message);
      } else {
        console.error('Registration failed. Unable to get error details.');
      }
    }
   
    navigate("/login")
  };

  

  

    return (
        <>
        <div id='signup'>
          <form onSubmit={handleRegister}>
            <motion.h1
         initial={{
    y : "-100%",
    opacity :0 ,
  }}
  whileInView={{
    y :"0",
    opacity:"1",
  }}>
    SignUp Your Account
    </motion.h1>
            
            <input type="text" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder='Name'
             required />

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
  }}>SignUp</motion.button>
          </form>

          <div><p>Already Registered        <Link to='/login'>Login</Link></p></div>

        </div>
        
        
        </>
      )
    }

export default SignUp