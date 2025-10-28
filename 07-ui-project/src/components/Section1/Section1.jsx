import React from 'react'

import Navbar from './Navbar'
import Hero from './Hero'

const Section1 = (props) => {

  // console.log(props.users);
  
  return (
    <div className=' h-screen w-full '>
      <Navbar/>
      <Hero users={props.users}/>
    </div>
  )
}

export default Section1
