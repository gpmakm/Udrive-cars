"use client"

import React from 'react'
import { useState } from 'react'

const Book_a_car = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [aadharNum, setAadharNum] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [days, setDays] = useState('');
    const [address, setAddress] = useState('');
    // let info={
    //     username:username,
    //     email:email,
    //     phoneNum:phoneNum,
    //     aadharNum:aadharNum,
    //     vehicle:vehicle,
    //     days:days,
    //     address:address
    // }

   
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    const info = {
      username,
      email,
      phoneNum,
      aadharNum,
      vehicle,
      days,
      address,
    };

    try {
      const response = await fetch('http://localhost:3000/api/handler/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ info }) // Send the form data as JSON
      });

    //   if (!response.ok) {
    //     throw new Error('Failed to submit form');
    //   }

      const result = await response.json();
      alert(result.message); // Show success message
    } catch (error) {
      console.log(`Error submitting form:${error}`, error);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className='carBookForm'>
        <h2>Book a car</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="uname">Name</label>
        <div className="field">
            <input type="text" name="username" id="name" onChange={(e)=>{setUsername(e.target.value)}} className="data" required />
        </div>
        <label htmlFor="emailId">Email</label>
        <div className="field">
            <input type="email" name="email" id="emailId" className="data" onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <label htmlFor="phoneNum">Contact number</label>
        <div className="field">
            <input type="number" name="phoneNum" id="phoneNum" className="data" onChange={(e)=>{setPhoneNum(e.target.value)}} required />
        </div>
        <label htmlFor="aadharNum">Aadhar number</label>
        <div className="field"> 
            <input type="number" name="aadharNum" id="aadharNum" onChange={(e)=>{setAadharNum(e.target.value)}} className="data" required />
        </div>
        <label htmlFor="panNum">License number</label>
        <div className="field">
            <input type="text" name="licNum" id="panNum" className="data"  />
        </div>
        <label htmlFor="vehicle">Vehicle name</label>
        <div className="field">
            <select name="vehicle" title='vehicle' id="vehicleName" onChange={(e)=>{setVehicle(e.target.value)}}>
                <option value="Scarpio S">Scorpio S - Rs. 4999/- per day</option>
                <option value="XUV 300(Sunroof)">XUV 300 Sunroof - Rs. 2799/- per day</option>
                <option value="Tata Safari">TATA Safari - Rs. 4999/- per day </option>
                <option value="Hyundai"> Hyundai - Rs. 1999/- per day</option>
                <option value="Thar">Thar</option>
                <option value="Renault">Renault</option>
                
            </select>
        </div>
        <label htmlFor="days">Days you rent</label>
        <div className="field">
            <input type="number" name="days" id="days" className="data" onChange={(e)=>{setDays(e.target.value)}} />
        </div>
        <label htmlFor="address">Delivery address</label>
        <div className="field">
            <input type="text" name="address" id="address" className="data" onChange={(e)=>{setAddress(e.target.value)}} />
        </div>
        
        <button type='submit'>Book the car</button>
    </form>
    
    
    </div>
  )
}

export default Book_a_car