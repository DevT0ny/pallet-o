import React, { useState } from 'react'
import tinycolor from 'tinycolor2'
import Header from './Header'


export default function Pallets() {

  const [color, setColor] = useState('#ff0000')

  var brightenList = [], darkenList=[], step =4;
  for (let i=100; i>=0 ;i-=step) brightenList.push( tinycolor(color).brighten(i).toString() )
  for (let i=0; i<=100 ;i+=step) darkenList.push(tinycolor(color).darken(i).toString())

  var shadesList= [...brightenList,...darkenList ] ;
  shadesList = [...new Set(shadesList)]

  return (
    <>
      <Header addColor={setColor}/>

        <div className="px-4 w-full --bg-indigo-700 gap-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >

          {
            shadesList.map((color,inx_)=>{
              return (
                <div key={inx_}  className="w-full h-24  overflow-hidden relative " style={{backgroundColor:color}}>
                  <div className="m-auto" style={{color:tinycolor(color).greyscale().toHexString()}} >{color}</div>
                  <div className="m-auto" style={{color:tinycolor(color).lighten().desaturate().toHexString()}} >{color}</div>

                </div>
              )
            })
          }



      </div>
    </ >
  )
}
