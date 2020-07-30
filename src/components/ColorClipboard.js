import React, {useEffect,useState, useContext}  from 'react'
import clipboard from 'clipboard'

import Header from './Header';
import ColorCard from './ColorCard'
import {AlertContext} from '../contexts/AlertContext'

export default function ColorClipboard(){
		var copyClassName = 'copyColor'
		// eslint-disable-next-line
		var Clipboard = new clipboard("."+copyClassName);

		let localClipboardColors =  JSON.parse(localStorage.getItem('clipboardColors'))
	  const [clipboardColors, setClipboardColors] = useState( localClipboardColors ? localClipboardColors :[]);
		const {showPopup } = useContext(AlertContext)


	  useEffect(() => {
	    localStorage.setItem('clipboardColors', JSON.stringify(clipboardColors));
	  }, [clipboardColors]);

	  const addColor = (color)=> {
	    setClipboardColors([{color}, ...clipboardColors])
	  }

	  const removeColor = (id)=>{
	    let newClipboardColor = clipboardColors.filter((_,index)=>index!==id)
	    setClipboardColors(newClipboardColor)
	  }

		const checkRegex = /^#?\w{6}$/

		const handleSubmit = (e,color)=>{
	      if (color.match(checkRegex)==null) {
	        e.target.children[1].setAttribute("data-error","data-error")
	        return false
	      }
	       addColor(color);
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
				<Header checkRegex={checkRegex} addColor={addColor} handleChange={handleChange} handleSubmit={handleSubmit} />
				<div className="px-4 w-full --bg-indigo-700 grid gap-2  sm:gap-2 md:gap-3 lg:gap-4 xl:gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
					{
						clipboardColors.map(({color},inx)=>{
							return (
								<ColorCard color={color} id={inx} copyId={`copyId-${inx}`} key={inx} remove={removeColor} copyClassName={copyClassName}
									showPopup={showPopup}
									 />
							)
						})
					}
				</div>
			</>
		)
	}
