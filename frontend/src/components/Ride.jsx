import React from 'react'
import {motion} from "framer-motion";
const Ride = () => {
  return <>
  
    <div id='ride'>
<motion.p
initial={{
    y : "-100%",
    opacity :0 ,
  }}
  whileInView={{
    y :"0",
    opacity:"1",
  }}
>
    HOW ITS WORK
    </motion.p>

<motion.h1
initial={{
    y : "+100%",
    opacity :0 ,
  }}
  whileInView={{
    y :"0",
    opacity:"1",
  }}
>
    Rent With 3 Easy Steps
    </motion.h1>

<div id='ride-out'>

<div id='ride1'>
    <h2>Choose a Location</h2>
    <p>Select your ideal destination from our diverse range of locations, whether it's the bustling cityscape, scenic countryside, or coastal retreats. With rental car options available in various regions, finding the perfect starting point for your journey has never been easier. Explore the possibilities and make your selection with confidence, knowing that your adventure begins where you want it to.
    </p>
</div>

<div id='ride2'>
<h2>Select Pick-Up Date</h2>
    <p>Tailor your travel plans effortlessly by choosing the pick-up date that suits your schedule. Our user-friendly interface allows you to browse through available dates, ensuring flexibility and convenience. Whether it's a weekend getaway or an extended road trip, you have the power to schedule your car rental according to your preferences. Lock in your dates and get ready to hit the road on your terms.
    </p>
</div>

    <div id='ride3'>
<h2>Book a Car</h2>
    <p>Seamlessly transition from selecting your location and pick-up date to booking the perfect car for your journey. Our extensive fleet offers a variety of vehicles to cater to your needs, from compact cars for city exploration to spacious SUVs for family adventures. With transparent pricing and easy booking options, reserving your rental car is a straightforward process. Enjoy the freedom of the open road with the vehicle that suits your style and requirements.
    </p>
</div>
</div>

    </div>
 </>
 
}

export default Ride