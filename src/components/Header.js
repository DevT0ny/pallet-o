import React,{useState,useContext} from 'react'
import {ClipboardContext } from '../contexts/ClipboardContext'
export default function Header() {
    const [color, setColor] = useState('')
    const { addColor } = useContext(ClipboardContext)
    const checkRegex = /^#?\w{6}$/
    var onSubmit = (e)=>{
        e.preventDefault()
        if (color.match(checkRegex)==null) {
          e.target.children[1].setAttribute("data-error","data-error")
          return false
        }
        addColor(color)
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
        <header className="w-full h-16 bg-white fixed z-10">
          <div id="popup" className="absolute w-1/12 h-8  top-0 z-30  font-bold bg-blue-700 -500 rounded mt-1 text-center text-white" style={{marginLeft:39+'%'}} ></div>
            <form onSubmit={onSubmit} className="h-full w-full py-2 px-6 bg-gray-500/  items-center flex flex-row" autoComplete="off">
                <input
                  type="color"
                  className="w-12 h-10 border-0 rounded outline-none focus:border-blue-400 border-2 border-white origin-top hover:border-gray-400"
                  onChange={handleChange}
                  value={color}
                  />
                <input
                  type="text" name="color"
                  className="w-24 h-8 mx-4 text-center bg-gray-300 focus:shadow-outline outline-none rounded hover:border-gray-400 border-2"
                  onChange={handleChange}
                  value={color}
                />
                <input type="submit" className="w-16 h-8 bg-blue-500 hover:bg-blue-400 rounded text-white font-semibold focus:shadow-outline outline-none " value="Add"/>
            </form>
        </header>
    )
}
