import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const Details = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        pickupDate: '',
        returnDate: '',
        phoneNo: '',
        paymentMethod: '',
         location: '',//To store the user's current location
      });
    
      const handleChange = (e) => {
        if (e.target.name !== 'location') {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Implement form submission logic
        try {
          const response = await axios.post('http://localhost:5000/api/details', formData);
          console.log(response.data); // Log the server response
          toast.success("Ride is on the Way !")
          navigate("/")
        } catch (error) {
          console.error(error);
        }
        
      };
    
      const getUserLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setFormData({ ...formData, location: `${latitude},${longitude}` });
            },
            (error) => {
              console.error(error.message);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
        
      };
    
      useEffect(() => {
        getUserLocation(); // Get user's location when the component mounts
      }, []);
    

  return (
    <>
    <div id='details'>

    
      <form onSubmit={handleSubmit}>
      <h1>Fill Out Details </h1>
      <h3>Your Name :</h3>
        <input type="text" required name="name" placeholder="Name" onChange={handleChange} />
        {/*<h3>Your Current Location :</h3>
        <input type="text" required name="location" placeholder="Location" onChange={handleChange} />*/}
        <h3>Pickup Date :</h3>
        <input type="date" required name="pickupDate" placeholder="Pickup Date" onChange={handleChange} />
        <h3>Return Date:</h3>
        <input type="date" required name="returnDate" placeholder="Return Date" onChange={handleChange} />
        <h3>Phone No:</h3>
        <input type="tel" required name="phoneNo" placeholder="Phone No" onChange={handleChange} />
        <h3>Payment Method:</h3>
        <input type="text" required name="paymentMethod" placeholder="Payment Method" onChange={handleChange} />
        {/* Display the user's current location */}
         <p>User's Location: {formData.location}</p>
        <button type="submit">Submit</button>
      </form>

    </div>
    </>
  )
}

export default Details