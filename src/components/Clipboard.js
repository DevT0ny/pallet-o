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
			<div className="bg-gray-300 pt-16	 "  >

				<div className="grid grid-cols-4 gap-4 p-6" >
					{
						clipboardColors.map(({color},index)=>{
							return (
								<Color color={color} id={index} key={index} remove={removeColor} copyClassName={copyClassName}  />
							)
						})
					}
				</div>
			</div>
		)
	}
