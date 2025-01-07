"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import safari from '../UdriveImages/TaTaSafari.jpg'
import scorpip from '../UdriveImages/ScorpipN.jpg'
import xuv from '../UdriveImages/XUV.jpg'
import baleno from '../UdriveImages/Baleno.jpg'
import dzire from '../UdriveImages/11.png'
import thar from '../UdriveImages/14.png'
import sonet from '../UdriveImages/Sonet.jpg'
import swift from '../UdriveImages/Swift.jpg'
import i20 from '../UdriveImages/i20.jpg'
import venue from '../UdriveImages/Venue.jpg'
import renault from '../UdriveImages/9.jpg'
import s10 from '../UdriveImages/S10.jpg'
import gv from '../UdriveImages/GrandVitara.jpg'
import Aura from '../UdriveImages/Aura.jpg'
import creta from '../UdriveImages/Creta.jpg'
import wagonr from '../UdriveImages/Wagonr.jpg'
//import thar from '../bookings/1.png'




const cars = () => {
  const confirmIt=()=>{
    alert("Are you sure to book it?");
  }
  return (
    // <div className='carPage'>We have the following range of vehicles alognwith their rents.
    //   <div className='cars'>
    //     <div className='carInfo'>
    //       <Image src={gv} width={450} height={400} />
    //       <div className='carRent'>Rs. 4999/- per day</div>
    //       <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
    //     </div>
    //     <div className='carInfo'>
    //       <Image src={scorpip} width={450} height={400} />
    //       <div className='carRent'>Rs. 4999/- per day</div>
    //       <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
    //     </div>

    //   </div>
    //   <div className='cars'>
    //     <div className='carInfo'>
    //       <Image src={baleno} width={450} height={400} />
    //       <div className='carRent'>Rs. 2500/- per day</div>
    //       <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
    //     </div>
    //     <div className='carInfo'>
    //       <Image src={xuv} width={450} height={400} />
    //       <div className='carRent'>Rs. 2799/- per day</div>
    //       <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
    //     </div>
    //   </div>
    //   <div className='cars'>
    //   <div className='carInfo'>
    //     <Image src={dzire} width={450} height={400} />
    //     <div className='carRent'>Rs. 2200/- per day</div>
    //     <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
    //   </div>
    //   <div className='carInfo'>
    //     <Image src={thar} width={450} height={400} />
    //     <div className='carRent'>Rs. 4199/- per day</div>
    //     <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
    //   </div>
    //   </div>
    //   <div className='cars'>
    //   <div className='carInfo'>
    //     <Image src={swift} width={450} height={400} />
    //     <div className='carRent'>Rs. 2099/- per day</div>
    //     <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
    //   </div>
    //   <div className='carInfo'>
    //     <Image src={sonet} width={450} height={400} />
    //     <div className='carRent'>Rs. 2800/- per day</div>
    //     <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
    //   </div>
    //   </div>
    //   <div className='cars'>
    //   <div className='carInfo'>
    //     <Image src={venue} width={450} height={400} />
    //     <div className='carRent'>Rs. 2750/- per day</div>
    //     <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
    //   </div>
    //   <div className='carInfo'>
    //     <Image src={i20} width={450} height={400} />
    //     <div className='carRent'>Rs. 2699/- per day</div>
    //     <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
    //   </div>
    //   </div>
    //   <div className='cars'>
    //   <div className='carInfo'>
    //     <Image src={s3} width={450} height={400} />
    //     <div className='carRent'>Rs. 3999/- per day</div>
    //     <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
    //   </div>
    //   <div className='carInfo'>
    //     <Image src={s10} width={450} height={400} />
    //     <div className='carRent'>Rs. 3499/- per day</div>
    //     <div className='bookI'> <Link href={"/bookings"} className='bookNow'>Book now</Link> </div>
    //   </div>
    //   </div>
    // </div>
    <main class="main-content">
        <h2>Booking place </h2>
        <div class="product-grid">
            <div class="product-item">
                <Image src={thar} alt="Product 1"/>
                <h3>Your wish! Thar</h3>
                <p>Per day only &#8377;4199/-</p>
                
                <a href='/bookings'  onClick={confirmIt}>book now!</a>
            </div>
            <div class="product-item">
                <Image src={renault} alt="Product 2"/>
                <h3>Your wish! Renault car</h3>
                <p>Per day only &#8377;1999/-</p>
                <a href='/bookings' onClick={confirmIt}>book now!</a>
            </div>
            <div class="product-item">
                <Image src={baleno} alt="Product 3"/>
                <h3>Your wish! Brezza</h3>
                <p>Per day only &#8377;2599/-</p>
                <a href='/bookings' onClick={confirmIt}>book now!</a>
            </div>
            <div class="product-item">
                <Image src={xuv} alt="Product 4"/>
                <h3>Your wish! XUV-300</h3>
                <p>Per day only &#8377;2799/-</p>
                <a href='/bookings' onClick={confirmIt}>book now!</a>
            </div>
            <div class="product-item">
                <Image src={wagonr} alt="Product 5"/>
                <h3>Your wish! WagnaR</h3>
                <p>Per day only &#8377;1899/-</p>
                <a href='bookings' onClick={confirmIt}>book now!</a>
            </div>
            <div class="product-item">
                <Image src={i20} alt="Product 5"/>
                <h3>Your wish! I20</h3>
                <p>Per day only &#8377;2699/-</p>
                <a href='bookings' onClick={confirmIt}>book now!</a>
            </div>
            <div class="product-item">
                <Image src={s10} alt="Product 5"/>
                <h3>Your wish! Scorpio_SIO  </h3>
                <p>Per day only &#8377;3499/-</p>
                <a href='bookings' onClick={confirmIt}>book now!</a>
            </div>
            <div class="product-item">
                <Image src={Aura} alt="Product 5"/>
                <h3>Your wish! Aura </h3>
                <p>Per day only &#8377;2199/-</p>
                <a href='bookings'  onClick={confirmIt}>book now!</a>
            </div>
            <div class="product-item">
                <Image src={swift} alt="Product 5"/>
                <h3>Your wish! Swfit</h3>
                <p>Per day only &#8377;2099/-</p>
                <a href='bookings' onClick={confirmIt}>book now!</a>
            </div>
            <div class="product-item">
                <Image src={venue} alt="Product 5"/>
                <h3>Your wish! Venue</h3>
                <p>Per day only &#8377;2799/-</p>
                <a href='bookings' onClick={confirmIt}>book now!</a>
            </div>
            <div class="product-item">
                <Image src={creta} alt="Product 5"/>
                <h3>Your wish! Careta</h3>
                <p>Per day only &#8377;3299/-</p>
                <a href='bookings' onClick={confirmIt}>book now!</a>
            </div>
            <div class="product-item">
                <Image src={sonet} alt="Product 5"/>
                <h3>Your wish!  Nexon</h3>
                <p>Per day only &#8377;2999/-</p>
                <a href='bookings' onClick={confirmIt}>book now!</a>
            </div>
            
        </div>
    </main>


  )
}

export default cars
