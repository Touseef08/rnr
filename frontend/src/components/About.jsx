import React from 'react'
import {motion} from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from "../assets/p1.jpg";
import pic2 from "../assets/p2.jpg";
import pic3 from "../assets/p3.jpg";
import pic4 from "../assets/c7.jpg";
import pic5 from "../assets/p5.jpg";

const About = () => {
  return (<>
    <div id='about'>
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
    ABOUT US
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
    Best Customer Experience
    </motion.h1>
    </div>
    <div id='about1'>
    <div id='image'>
      <Carousel 
      infiniteLoop
      showArrows={false}
      showStatus={false}
      autoPlay
      showThumbs={false}
      interval={2000}
      showIndicators={false}
      >
        <div>
          <img src={pic1} alt="" />
        </div>
        <div>
          <img src={pic2} alt="" />
        </div>
        <div>
          <img src={pic3} alt="" />
        </div>
        <div>
          <img src={pic5} alt="" />
        </div>
        <div>
          <img src={pic4} alt="" />
        </div>
        
      </Carousel>
    </div>
        <div id='text'>
          <h2>About Us</h2>
            <p>Welcome to Rent N Ride, your trusted companion in the world of travel. At [Your Website Name], we are driven by a commitment to deliver exceptional car rental experiences that go beyond just transportation. With a passion for exploration and a dedication to customer satisfaction, we offer a diverse fleet of well-maintained vehicles suited to every journey.</p>
            <p>Our mission is to simplify your travel plans with straightforward booking processes and transparent pricing. Founded on the values of reliability and convenience, [Your Website Name] is here to make your travel dreams a reality. Whether you're a seasoned traveler or a first-time explorer, our team is dedicated to ensuring that your rental experience is smooth, enjoyable, and tailored to your unique needs. Discover the joy of the open road with Rent N Ride where every trip becomes a memorable adventure.</p>
            
        </div>
    </div>
 </> )
}

export default About