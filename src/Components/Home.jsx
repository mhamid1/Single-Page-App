import React from 'react'
import bg from '../Images/background.jpg'
import '../App.css';

function Home() {
  return (
    <div>
        <h1>
            This is a Home Page
        </h1>
        <img src={bg} alt="" className='bg'/>
    </div>
  )
}

export default Home