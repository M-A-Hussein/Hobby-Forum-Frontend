import React from 'react'

import '../App.css';
import image from '../images/ross-sneddon-sWlDOWk0Jp8-unsplash.jpg'

/** @jsxImportSource theme-ui */

function Home() {
  
  return (
    <>
    <div className='container'>
      <h1 className='firstHeader' sx={{color: 'firstHeader'}}> What is your hobby? </h1>
     <hr/>
      <div className='boxes'>
        <div className='box box1 ' sx={{borderColor: 'black'}}><img/> <h3>Puzzles</h3><p>Want to share your experiences and ideas with people or want to see and read about other peoples </p></div>
        
        <div className='box box2 '><img src={image}/> </div>
        <div className='box box3 '><img src={image}/> </div>
      </div>
      <div className='boxes'>
      <div className='box box4 '><img src={image}/> </div>
        <div className='box box5 '><img src={image}/> </div>
        <div className='box box6 '><img src={image}/> </div>
      </div>
    </div>
    </>
  )
}

export default Home;