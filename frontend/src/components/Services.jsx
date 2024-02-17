import React from 'react'
import {motion} from "framer-motion";
import image1 from '../assets/c1.jpg';
import image2 from '../assets/k2.jpeg';
import image3 from '../assets/k3.jpeg';
import image4 from '../assets/k4.jpeg';
import image5 from '../assets/k5.jpeg';
import image6 from '../assets/k6.jpeg';
import image7 from '../assets/k7.jpeg';
import image8 from '../assets/k8.jpeg';
import image9 from '../assets/k9.jpeg';
import image10 from '../assets/k10.jpeg';
import image11 from '../assets/k11.jpeg';
import image12 from '../assets/k12.jpeg';
import image13 from '../assets/c5.jpg';
import image14 from '../assets/k14.jpeg';
import image15 from '../assets/k15.jpeg';
import image16 from '../assets/k16.jpeg';
import image17 from '../assets/k17.jpeg';
import image18 from '../assets/k18.jpeg';
import image19 from '../assets/k19.jpeg';
import image20 from '../assets/k20.jpeg';
import { Link } from 'react-router-dom';

const Services = () => {

  return (
    <>
    <div id='services'>
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
    Cars Services
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
    Explore Out Top Deals From Top Rated Dealers
    </motion.h1>
    </div>
    
    <div id='cars-section'>

<div id='car'>
<div id='car-img'><img src={image1} alt="" /></div>
<div id='car-content'>
  <h3>Brand : Audi</h3>
    <h3>Model : 2020</h3>
    <h2>Price : 30,000/day</h2>
    <div id='rent-btn'> <Link to="/details">Rent Now</Link>
    
    </div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image2} alt="" /></div>
    <div id='car-content'><h3>Brand : Kia</h3>
        <h3>Model : 2022</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

    
<div id='car'>
<div id='car-img'><img src={image3} alt="" /></div>
    <div id='car-content'><h3>Brand : Hyundai</h3>
        <h3>Model : 2023</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

    
<div id='car'>
<div id='car-img'><img src={image4} alt="" /></div>
    <div id='car-content'><h3>Brand : MG</h3>
        <h3>Model : 2023</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

   
<div id='car'>
<div id='car-img'><img src={image5} alt="" /></div>
    <div id='car-content'><h3>Brand : Toyota</h3>
        <h3>Model : 2022</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

    
<div id='car'>
<div id='car-img'><img src={image6} alt="" /></div>
    <div id='car-content'><h3>Brand : Suzuki</h3>
        <h3>Model : 2020</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image7} alt="" /></div>
    <div id='car-content'><h3>Brand : BMW</h3>
        <h3>Model : 2020</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image8} alt="" /></div>
    <div id='car-content'><h3>Brand : Changan</h3>
        <h3>Model : 2022</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image9} alt="" /></div>
    <div id='car-content'><h3>Brand : Hyundai</h3>
        <h3>Model : 2021</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image10} alt="" /></div>
    <div id='car-content'><h3>Brand : Suzuki</h3>
        <h3>Model : 2020</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image11} alt="" /></div>
    <div id='car-content'><h3>Brand : Hyundai</h3>
        <h3>Model : 2020</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image12} alt="" /></div>
    <div id='car-content'><h3>Brand : Honda</h3>
        <h3>Model : 2022</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image13} alt="" /></div>
    <div id='car-content'><h3>Brand : Porsche</h3>
        <h3>Model : 2020</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image14} alt="" /></div>
    <div id='car-content'><h3>Brand : Toyota</h3>
        <h3>Model : 2020</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image15} alt="" /></div>
    <div id='car-content'><h3>Brand : Suzuki</h3>
        <h3>Model : 2020</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image16} alt="" /></div>
    <div id='car-content'><h3>Brand : Suzuki</h3>
        <h3>Model : 2020</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image17} alt="" /></div>
    <div id='car-content'><h3>Brand : MG</h3>
        <h3>Model : 2020</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image18} alt="" /></div>
    <div id='car-content'><h3>Brand : Honda</h3>
        <h3>Model : 2020</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image19} alt="" /></div>
    <div id='car-content'><h3>Brand : Toyota</h3>
        <h3>Model : 2020</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div>

<div id='car'>
    <div id='car-img'><img src={image20} alt="" /></div>
    <div id='car-content'><h3>Brand : Toyota</h3>
        <h3>Model : 2020</h3>
        <h2>Price : 30,000/day</h2>
         <div id='rent-btn'><Link to="/details">Rent Now</Link></div></div>
</div> id='car'

    </div>
    
  </>)
}

export default Services