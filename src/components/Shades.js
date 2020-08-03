import React, { useState,useContext,useEffect } from 'react'
import tinycolor from 'tinycolor2'
import clipboard from 'clipboard'

import Header from './Header'
import ShadeCard from './ShadeCard'
import {AlertContext} from '../contexts/AlertContext'

export default function Shades() {

  let localShade =  JSON.parse(localStorage.getItem("localShade"))
  const [color, setColor] = useState(localShade ? localShade : '')
  const { setMessage, showPopup } = useContext(AlertContext)
  useEffect(()=>{
    localStorage.setItem("localShade",JSON.stringify(color))
  },[color])

  var brightenList = [], darkenList=[], step =8;
  for (let i=100; i>=0 ;i-=step) brightenList.push( tinycolor(color).brighten(i).toString() )
  for (let i=0; i<=100 ;i+=step) darkenList.push(tinycolor(color).darken(i).toString())
  var shadesList= [...brightenList,...darkenList ] ;
  shadesList = [...new Set(shadesList)]


  var copyClassName = 'copyShade'
  // eslint-disable-next-line
  var Clipboard = new clipboard("."+copyClassName);

  const checkRegex = /^#?\w{6}$/

  const handleSubmit = (e,color)=>{
      // e.preventDefault()
      if (color.match(checkRegex)==null) {
        e.target.children[1].setAttribute("data-error","data-error")
        return false
      }
       setColor(color);
      // console.log(color);
  }

  const handleChange = (e) =>{
    let color = e.target.value
    if (!color.match(checkRegex))
        e.target.setAttribute("data-error","data-error")
    else
        e.target.removeAttribute("data-error")
    if (color.length > 1 && color[0]!=='#') color = '#' + color
    if (color.length >2 && color[1]==="#") color = color.substr(1)
    return color
  }

  return (
    <>
    <Header checkRegex={checkRegex} addColor={setColor} handleChange={handleChange} handleSubmit={handleSubmit} />

      <div onLoad={()=> setMessage("Copied")} className="px-4 w-full --bg-indigo-700 gap-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >

          {

            shadesList.map((color,inx)=>{
              return (
                <ShadeCard color={color} key={inx} copyId={`shadeCopyId-${inx}`}
                  textColor={tinycolor(color).isLight() ? "#000000" : "#ffffff"}
                  copyClassName={copyClassName}
                  showPopup={showPopup}
                />
              )
            })
          }



      </div>
    </ >
  )
}
