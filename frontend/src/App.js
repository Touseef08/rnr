import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header,{HeaderPhone} from './components/Header';
import Home from './components/Home';
import Ride from './components/Ride';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import {Toaster} from "react-hot-toast"
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';
import Details from './components/Details';


function App() {
const [menuOpen,setMenuOpen] = useState(false);

  return (
    <>
    <Router>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/ride' element={<Ride />} />
    <Route path='/details' element={<Details />} />
    <Route path='/services' element={<Services />} />
    <Route path='/about' element={<About />} />
    <Route path='/reviews' element={<Reviews />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
    </Routes>
    <Toaster />
    </Router>
    </>
  );
}

export default App;
