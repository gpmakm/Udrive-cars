import Link from 'next/link'
import React from 'react'
import Footer from './Footer'
import Image from 'next/image'
import udrivelogo from './UdriveImages/Applogo.jpg'
import adPic from './UdriveImages/15.png'
import adPic2 from './UdriveImages/adPic2.jpg'
import adPic3 from './UdriveImages/9.png'


const page = () => {
  //const images = [ udrivelogo,adPic, adPic2,adPic3 ];
  return (
    <div className='homeElem'>
      <Image src={udrivelogo} id='appLogo' />
      <h1>Need a vehicle?</h1>
      <h2>
        Unlock the roads with Udrive vehicles.
        Rent the premium vehicles and rule the roads.
      </h2>
      <div class="vehicle">
    <div class="body"></div>
    <div class="roof"></div>
    <div class="window"></div>
    <div class="wheel front-left"></div>
    <div class="wheel front-right"></div>
    <div class="wheel rear-left"></div>
    <div class="wheel rear-right"></div>
  </div>
      {/* <div>  */}
         {/* <ImageSlider images={images} /> </div> */}

      

    </div>
  )
}

export default page