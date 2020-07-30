
import React, { createContext, useState, useEffect } from 'react';

export const AlertContext = createContext();

const AlertContextProvider = (props) => {

  const [message, setMessage] = useState('Copied')
  const [show, showPopup] = useState(false)
  useEffect(()=>{
    let ele = document.getElementById('Alert')
    ele.children.textContent= message
    ele.style.animationName="showPopup"
    // console.log("yess");
    setTimeout(()=>document.getElementById('Alert').style.animationName="",1100)
    setTimeout(()=>showPopup(false),1300)
  },[show,message])


  return (
    <AlertContext.Provider value={{setMessage, showPopup}}>
     {props.children}
   </AlertContext.Provider>
  )
}

export default AlertContextProvider;
