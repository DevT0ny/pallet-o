import React, { useState } from 'react'
import tinycolor from 'tinycolor2'
export default function Test() {
  const [color, setColor] = useState('#0000ff')
  // const [depth, setDepth] = useState('1')

  const combosList = ['analogous','monochromatic']
  const shadowList = ["lighten","brighten","darken","desaturate"  ]
  // const amount= [...Array(101).keys()]
  var combos = combosList.map((combo)=>{
    let colorCombos = tinycolor(color)[combo]()
    // let arr =  eval(`tcolor.${combo}()`)
     return colorCombos.map((t)=>t.toHexString())

  })

  var shadesList = shadowList.map((shadow)=>{
    // return amount.map((amo)=>{
    //   return tinycolor(color)[shadow](amo).toString()
    // })

    var sh =[]
    for (let i=0; i<101 ;i+=4) {
      sh.push(tinycolor(color)[shadow](i).toString())
    }
    return sh
  })

  shadesList = shadesList.map((shades)=>{
    return [...new Set(shades)]
  })


  const degs=[0,45,90,90+45,180,180+45,270,270+45,360]
  // var turnshades = [];
  degs.map((deg)=>tinycolor(color).spin(deg).toString() )
  var flat = [].concat(...shadesList);
  console.log(flat);
  return (
      <div className="pt-12">
        <input type="text" className="w-30 h-8 bg-gray-500 text-center " onChange={(e)=>setColor(e.target.value)} ></input>

          {
            combos.map((colorCombos,inx_)=>{
              return(
                <div  key={inx_} className="w-full p-2 h-10 bg-gray-400 mb-2">
                  {
                    colorCombos.map((COlor,inx)=>{
                      return(
                        <span key={inx} className="w-10 h-full rounded text-white px-2 mr-2" style={{backgroundColor:COlor}} >
                          {COlor}
                        </span>
                      )
                    })
                  }
                </div>
              )
            })

          }
          <br></br>
          {
            shadesList.map((shades,inx_)=>{
              return (
                <div key={inx_}  className="w-full p-2 h-14 bg-gray-400 mb-2 ">
                  {
                    shades.map((color,inx)=>{
                      return(
                        <span key={inx} className="w-10 p-1 h-full rounded text-white mr-2" style={{backgroundColor:color}} >
                          {color}
                        </span>
                      )
                    })
                  }
                </div>
              )
            })
          }
          <br></br>
          {
            flat.map((color,inx_)=>{
              return (
                <div key={inx_}  className="w-full p-2 h-14 bg-gray-400 mb-2 " style={{backgroundColor:color}} >
                </div>
              )
            })
          }


      </div>
  )
}
