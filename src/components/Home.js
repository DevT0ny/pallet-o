import React, {Component}  from 'react'
import Color from './Color'
import clipboard from 'clipboard'

export default class Home extends Component {
	state={
		colors:[
			{ color: "#ff6600"},
			{ color: "#664400"},
			{ color: "#f6f600"},
			{ color: "#f6f600"},
			{ color: "#f6f600"},
			{ color: "#55a667"},
			{ color: "#ff6600"},
			{ color: "#875987"},
			{ color: "#ffffff"},
		]
	}
	remove=(id)=>{
		this.setState((state)=>{
			let colors = state.colors.filter((_,inx)=>inx!==id)
			return {colors}

		})
	}
	render(){
		var copyClassName = 'copyColor'
		var Clipboard = new clipboard("."+copyClassName);

    Clipboard.on('success', function(e) {
        console.log(e);
    });

    Clipboard.on('error', function(e) {
        console.log(e);
    });

		return (
			<div className="bg-gray-300 pt-16	 "  >

				<div className="grid grid-cols-4 gap-4 p-6" >
					{
						this.state.colors.map(({color},index)=>{
							return (
									// <div className="w-full h-20 rounded-md shadow-lg border-2 border-gray-400" style={{backgroundColor:color}}>50</div>
								<Color color={color} id={index} key={index} remove={this.remove} copyClassName={copyClassName}  />
							)
						})
					}
					{
						this.state.colors.map(({color},index)=>{
							return (
									// <div className="w-full h-20 rounded-md shadow-lg border-2 border-gray-400" style={{backgroundColor:color}}>50</div>
								<Color color={color} id={index+100} key={index+100} remove={this.remove} copyClassName={copyClassName} />
							)
						})
					}
					{
						this.state.colors.map(({color},index)=>{
							return (
									// <div className="w-full h-20 rounded-md shadow-lg border-2 border-gray-400" style={{backgroundColor:color}}>50</div>
								<Color color={color} id={index+200} key={index+200} remove={this.remove} copyClassName={copyClassName} />
							)
						})
					}
				</div>
			</div>
		)
	}
}


