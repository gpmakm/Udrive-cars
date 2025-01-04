import React from 'react'

const About = () => {
  return (
    <div className='attach'>

      <form >
        <label>Enter your name:</label>
        <div className='field'>
          <input type="text" name="name" className='data'/>
        </div>
        <label>Enter your email:</label>
        <div className='field'>
          <input type="email" name="email" className='data'/>
        </div>
        <label>Enter your number:</label>
        <div className='field'>
          <input type="number" name="phone" className='data'/>
        </div>
        <label>Enter your address:</label>
        <div className='field'>
          <input type="text" name="address" className='data'/>
        </div>
        <button type="submit">Submit</button>

      </form>

    </div>
  )
}

export default About