
import React, { createContext, useState,useEffect } from 'react';

export const ClipboardContext = createContext();

const ClipboardContextProvider = (props) => {
  let localClipboardColors =  JSON.parse(localStorage.getItem('clipboardColors'))
  const [clipboardColors, setClipboardColors] = useState( localClipboardColors ? localClipboardColors :[]);

  useEffect(() => {
    localStorage.setItem('clipboardColors', JSON.stringify(clipboardColors));
  }, [clipboardColors]);
  
  const addColor = (color)=> {
    setClipboardColors([...clipboardColors, {color} ])
  }

  const removeColor = (id)=>{
    let newClipboardColor = clipboardColors.filter((_,index)=>index!==id)
    setClipboardColors(newClipboardColor)
  }

  return (
    <ClipboardContext.Provider value={{clipboardColors,addColor,removeColor}}>
     {props.children}
    </ClipboardContext.Provider>
  )
}

export default ClipboardContextProvider;
