import React from 'react'

import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Hero = (props) => {
  return (
    <div className='px-7 py-16 flex gap-10 items-center h-[90vh] '>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Hero
