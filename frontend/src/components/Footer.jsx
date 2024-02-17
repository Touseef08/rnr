import React from 'react'
import img1 from "../assets/r3.jpg"
import {AiFillYoutube,AiFillFacebook,AiFillInstagram} from "react-icons/ai"
const Footer = () => {
  return (<>
    <div id='footer'>
<div id='footer1'>
<div id='img'><img src={img1} alt="" /></div>
<h3>Muhammad Touseef</h3>
<p>Motivation is Temporary but Discipline Last Forever.</p>
</div>
<div id='footer2'>
<h3>Social Media</h3>

<a href="https://youtube.com"><AiFillYoutube /></a>
<a href="https://facebook.com"><AiFillFacebook /></a>
<a href="https://instagram.com"><AiFillInstagram /></a>

</div>

    </div>
  </>)
}

export default Footer