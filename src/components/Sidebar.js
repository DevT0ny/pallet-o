import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class SlideBar extends Component {
    state={
        URLs:{
            Home:"/",
            Pallets:"/pallets",
            Shit:"/shit",
            About : "/about"
        }
    }
    links=()=>{
        let nav =[]
        for(let URL in this.state.URLs){
            nav.push((
                <li className="w-full " key={nav.length} >
                    <NavLink 
                       exact to={this.state.URLs[URL]}
                        activeClassName="bg-blue-400 text-white font-bold  "
                        className=" w-full py-2 px-10 inline-block font-semibold text-grey-600 hover:text-blue-900"
                    >
                    {URL}
                    </NavLink>

                </li>
            ))
        }

        return nav
    }
    render() {
        
        return (
            <nav className="w-48 bg-white h-screen fixed shadow-md">
                <h2 className="text-2xl font-bold text-blue-600 text-center py-4">Insta-color</h2>
                <ul className="h-full w-full p-0">
                    {this.links()}
                </ul>
            </nav>
        )
    }
}