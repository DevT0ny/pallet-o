import React,{useState} from 'react'

export default function Header({addColor}) {
    const [color, setColor] = useState('')
    const checkRegex = /^#?\w{6}$/

    var onSubmit = (e)=>{
        e.preventDefault()
        if (color.match(checkRegex)==null) {
          e.target.children[1].setAttribute("data-error","data-error")
          return false
        }
         addColor(color);
        setColor('')
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
      setColor( color)
    }


    return (
        <header className="w-full h-16 bg-white fixed todo top-0 z-10">
          <form onSubmit={onSubmit} className="h-full w-full py-2 px-6 bg-gray-500/  items-center flex flex-row" autoComplete="off">
              <input
                type="color"
                className=" w-1/6 lg:w-16  h-10 border-0 rounded outline-none focus:border-blue-400 border-2 border-white origin-top hover:border-gray-400"
                onChange={handleChange}
                value={color}
                />
              <input
                type="text" name="color"
                className=" w-8/12 lg:w-32 h-8 mx-4 text-center bg-gray-300 focus:shadow-outline outline-none rounded hover:border-gray-400 border-2"
                onChange={handleChange}
                value={color}
              />
              <input type="submit" className="w-16 h-8 bg-blue-500 hover:bg-blue-400 rounded text-white font-semibold focus:shadow-outline outline-none " value="Add"/>
          </form>

        </header>
    )
}
