
import React, { createContext, useState, useEffect } from 'react';

export const ModeContext = createContext();

const ModeContextProvider = (props) => {
  let localMode =  JSON.parse(localStorage.getItem("localMode"))
  const [mode, setMode] = useState( localMode ? localMode : 'hex')
  
  useEffect(()=>{

  },[mode])

  return (
    <ModeContext.Provider value={{mode}}>
     {props.children}
   </ModeContext.Provider>
  )
}

export default ModeContextProvider;
