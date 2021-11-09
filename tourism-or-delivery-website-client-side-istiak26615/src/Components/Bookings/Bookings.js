import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import './Bookings.css'

const Bookings = () => {
    const[bookings, setBookings]=useState([])
    useEffect(()=>{
        fetch('https://frightful-asylum-08457.herokuapp.com/bookings')
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[])
    return (
        <div className=" container">
                  
        <div className="row justify-content-center"> 
        <h3>Our Services</h3>      
            {
                bookings.map(booking=><Booking key={booking.id} service={booking}></Booking>)
            }
        </div>
        
        </div>
    );
};

export default Bookings;