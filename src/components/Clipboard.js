import React, {useContext,useEffect,useState}  from 'react'
import Color from './Color'
import clipboard from 'clipboard'
import Header from './Header';

import {ClipboardContext } from '../contexts/ClipboardContext'

export default function Clipboard(){
		var copyClassName = 'copyColor'
		// var Clipboard = new clipboard("."+copyClassName);

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
			<>
				<Header addColor={addColor} />
				<div className="px-4 w-full --bg-indigo-700 grid gap-2  sm:gap-2 md:gap-3 lg:gap-4 xl:gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
					{
						clipboardColors.map(({color},index)=>{
							return (
								<Color color={color} id={index} key={index} remove={removeColor} copyClassName={copyClassName}  />
							)
						})
					}
				</div>
			</>
		)
	}
