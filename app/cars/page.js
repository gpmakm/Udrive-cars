import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import safari from '../UdriveImages/TaTaSafari.jpg'
import scorpip from '../UdriveImages/ScorpipN.jpg'
import xuv from '../UdriveImages/XUV.jpg'
import baleno from '../UdriveImages/Baleno.jpg'
import dzire from '../UdriveImages/11.png'
import thar from '../UdriveImages/14.png'


const cars = () => {
  return (
    <div className='carPage'>We have the following range of vehicles alognwith their rents.
      <div className='cars'>
        <div className='carInfo'>
          <Image src={safari} width={450} height={400} />
          <div className='carRent'>Rs. 4999/- per day</div>
          <div className='bookI'> <Link href={"/Bookings"} className='bookNow'>Book now</Link> </div>
        </div>
        <div className='carInfo'>
          <Image src={scorpip} width={450} height={400} />
          <div className='carRent'>Rs. 4999/- per day</div>
          <div className='bookI'> <Link href={"/Bookings"} className='bookNow'>Book now</Link> </div>
        </div>

      </div>
      <div className='cars'>
        <div className='carInfo'>
          <Image src={baleno} width={450} height={400} />
          <div className='carRent'>Rs. 1999/- per day</div>
          <div className='bookI'> <Link href={"/Bookings"} className='bookNow'>Book now</Link> </div>
        </div>
        <div className='carInfo'>
          <Image src={xuv} width={450} height={400} />
          <div className='carRent'>Rs. 2799/- per day</div>
          <div className='bookI'> <Link href={"/Bookings"} className='bookNow'>Book now</Link> </div>
        </div>
      </div>
      <div className='cars'>
      <div className='carInfo'>
        <Image src={dzire} width={450} height={400} />
        <div className='carRent'>Rs. 2499/- per day</div>
        <div className='bookI'> <Link href={"/Bookings"} className='bookNow'>Book now</Link> </div>
      </div>
      <div className='carInfo'>
        <Image src={thar} width={450} height={400} />
        <div className='carRent'>Rs. 3999/- per day</div>
        <div className='bookI'> <Link href={"/Bookings"} className='bookNow'>Book now</Link> </div>
      </div>
      </div>
    </div>

  )
}

export default cars