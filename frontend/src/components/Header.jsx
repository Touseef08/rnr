import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import pic from '../assets/logo1.png';
import Login from './Login';
import { toast } from 'react-hot-toast';

const Header = ({menuOpen,setMenuOpen}) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);


  const handleLogout = () => {
    
    try {
      localStorage.removeItem('token');
      setLoggedIn(false);
      toast.success("Logout successfully !")
      console.log('Logout successful');
      navigate("/")
    } catch (error) {
      console.error('Logout failed', error.response.data.message);
    }
    
    // You may want to clear the token from local storage or cookies here
  };
  




  return<>

  <nav>
    <NavContent setMenuOpen={setMenuOpen} setLoggedIn={setLoggedIn} loggedIn={loggedIn} handleLogout={handleLogout} />
    </nav> 

    <button className='navBtn' onClick={()=>setMenuOpen(!menuOpen)}>
      <AiOutlineMenu />
      </button>
      
      {!loggedIn && <Login setLoggedIn={setLoggedIn}  />}
      </>
};



export const HeaderPhone =({menuOpen,setMenuOpen,setLoggedIn,loggedIn,handleLogout})=>{
  return(
  <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
    <NavContent setMenuOpen={setMenuOpen} setLoggedIn={setLoggedIn} handleLogout={handleLogout}  loggedIn={loggedIn}  />
    
    <div id='d3'>

{!loggedIn ? (
  <>
        <button onClick={handleLogout}>Logout</button>
     </>
    ) : (
     <>
  <Link onClick={()=>setMenuOpen(false)} to='/login'>LOGIN{' '} </Link>
  <Link onClick={()=>setMenuOpen(false)}  to='/signup'>SIGN UP</Link>
  </>
  )}
</div>
    
  </div>
  )
};


const NavContent =({setMenuOpen,loggedIn,handleLogout})=>(
  
<>
<img src={pic} alt="" />
<div id='d1'>
  <Link onClick={()=>setMenuOpen(false)} to="/">HOME</Link>
  <Link onClick={()=>setMenuOpen(false)} to="/ride">RIDE</Link>
  <Link onClick={()=>setMenuOpen(false)} to="/services">SERVICES</Link>
  <Link onClick={()=>setMenuOpen(false)} to="/about">ABOUT</Link>
  <Link onClick={()=>setMenuOpen(false)} to="/reviews">REVIEWS</Link>
</div>


<div id='d2'>

{loggedIn ? (
 <div> 
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : (
     <>
  <Link onClick={()=>setMenuOpen(false)} to='/login'>LOGIN{' '} </Link>
  <Link onClick={()=>setMenuOpen(false)}  to='/signup'>SIGN UP</Link>
  </>
  )}
</div>
</>

);

export default Header