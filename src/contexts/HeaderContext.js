
import React, { createContext, useState,useEffect,useContext } from 'react';
import {ClipboardContext } from './ClipboardContext'
// import { useLocation } from 'react-router-dom';
// const location = useLocation();
// if (location.pathname ==="/" )

export const HeaderContext = createContext();

const HeaderContextProvider = (props) => {

  const [color, setColor] = useState('')
  const { addColor } = useContext(ClipboardContext)
  const checkRegex = /^#?\w{6}$/

  var onSubmit = (e)=>{
      e.preventDefault()
      if (color.match(checkRegex)==null) {
        e.target.children[1].setAttribute("data-error","data-error")
        return false
      }
       addColor(color);
      setColor('')
      console.log(color);
  }

  const handleChange = (e) =>{
    let color = e.target.value
    if (!color.match(checkRegex))
        e.target.setAttribute("data-error","data-error")
    else
        e.target.removeAttribute("data-error")
    if (color.length > 1 && color[0]!=='#') color = '#' + color
    if (color.length >2 && color[1]==="#") color = color.substr(1)
    setColor( color)
  }


  return (
    <HeaderContext.Provider value={{color,onSubmit,handleChange}}>
     {props.children}
   </HeaderContext.Provider>
  )
}

export default HeaderContextProvider;
