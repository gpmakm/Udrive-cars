import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import home from './UdriveImages/icons8-home.gif'

const Navbar = () => {
  return (
    
   <nav>
    <span id="nav">TripOnGo car rental</span>
    <ul>
        <li><Link href={"/"}>Home</Link></li>
        <li> <Link href={"/attach-your-car"}>Attach-car</Link> </li>
       
        <li> <Link href={"/cars"}>Cars</Link> </li>
        <li> <Link href={"/bookings"} id='bookIt'>Book a car</Link> </li>
    </ul>
    
   </nav>
  )
}

export default Navbar;
