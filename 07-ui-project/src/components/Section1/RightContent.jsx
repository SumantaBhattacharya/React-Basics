import React from 'react'
import RightCard from './RightCard.jsx'

const RightContent = (props) => {

  // console.log("RightContent", props);

  return (
    <div id='RightContent' className='w-3/4 overflow-x-auto flex flex-nowrap gap-5 p-6 h-full'>
      {/* <RightCard/>
      <RightCard/>
      <RightCard/> */}
      {// users has 3 objects
        props.users && props.users.map(function (elem, idx) {
          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} des={elem.intro} color={elem.color} />
        })
      }
    </div>
  )
}

export default RightContent
