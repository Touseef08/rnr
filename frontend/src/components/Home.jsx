import React from 'react'
import {motion} from "framer-motion";
import img from '../assets/p6.jpg';
const Home = () => {
  return (
<>
  <div id='home'>
<img src={img} alt="" />

<div id='home1'>

<motion.h1
initial={{
  y : "-100%",
  opacity :0 ,
}}
whileInView={{
  y :"0",
  opacity:"1",
}}
>
  Looking to Rent a Car ?
  </motion.h1>

<motion.p
initial={{
  y : "+100%",
  opacity :0 ,
}}
whileInView={{
  y :"0",
  opacity:"1",
}}
>
  Now you can get Renting Cars with Reasonable Prices.
  </motion.p>
</div>

<motion.div id='form'
initial={{
  x : "-100%",
  opacity :0 ,
}}
whileInView={{
  x :"0",
  opacity:"1",
}}
>
    
      <h2>Hey Listen !</h2><p> Luxury Cars Are Waiting For You To Get Ride.</p>
   
     </motion.div>
     </div>
     </>
  
  );
}

export default Home