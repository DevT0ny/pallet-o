import React, {useContext}  from 'react'
import Color from './Color'
import clipboard from 'clipboard'
import {ClipboardContext } from '../contexts/ClipboardContext'

export default function Clipboard(){
		var copyClassName = 'copyColor'
		// eslint-disable-next-line
		var Clipboard = new clipboard("."+copyClassName);
		const { clipboardColors, removeColor } = useContext(ClipboardContext)

		return (
			// <div className="bg-gray-300 pt-16	 "  >

				<div className=" w-full grid gap-2 mt-4 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-4
					  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
					{
						clipboardColors.map(({color},index)=>{
							return (
								<Color color={color} id={index} key={index} remove={removeColor} copyClassName={copyClassName}  />
							)
						})
					}
				</div>
			// </div>
		)
	}
