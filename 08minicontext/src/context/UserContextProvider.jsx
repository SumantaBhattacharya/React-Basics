import React, { useState } from 'react'
import userContext from './UserContext';

const UserContextProvider = ({children}) => {

  const [isUser, setUser] = React.useState(null);

  return (
    <div>
      <userContext.Provider value={{isUser, setUser}}>
        {children}
      </userContext.Provider>
    </div>
  )
}

export default UserContextProvider;
// passing an object inside value
// top level to make it all accessible to all elements
