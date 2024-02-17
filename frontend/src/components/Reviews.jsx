import React from 'react'
import {motion} from "framer-motion";
import img1 from "../assets/r1.jpg"
import img2 from "../assets/r2.jpg"
import img3 from "../assets/r3.jpg"
const Reviews = () => {
  return (<>
    <div id='reviews'>
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
    REVIEWS
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
    What Our Customer Say
    </motion.h1>
    </div>

    <div id='reviews1'>
  <div id='rw'>
  <div id='imp'><img src={img1} alt="" /></div>
  <h3>Jamal Khan</h3>
  <p>"Absolutely impressed with the seamless booking process and top-notch service from Rent N Ride. The car was clean, well-maintained, and made our road trip a breeze!"</p>
  </div>

  <div id='rw'>
  <div id='imp'><img src={img2} alt="" /></div>
  <h3>Bilal Ali</h3>
  <p>"Five stars for Rent N Ride! The customer service was outstanding, and the variety of cars available allowed us to find the perfect fit for our family vacation. Highly recommend!"</p>
  </div>
  
  <div id='rw'>
  <div id='imp'><img src={img3} alt="" /></div>
  <h3>Talha Khan</h3>
  <p>"Exceptional experience with Rent N Ride from selecting the car to drop-off. The staff was friendly, the rates were competitive, and the vehicle exceeded expectations. Will definitely be a repeat customer!"</p>
  </div>

    </div>
  </>)
}

export default Reviews