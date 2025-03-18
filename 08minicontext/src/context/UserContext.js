import React from 'react'

const userContext = React.createContext()// it is a method

export default userContext;
// userContext is itself a provider to access of the createContext to the components. It is a wrapper which wraps around multiple components