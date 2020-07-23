import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    state={
        URLs:{
            home:"/",
            pallets:"/pallets",
            shit:"/shit"
        }
    }
    links=()=>{
        let nav =[]
        for(let URL in this.state.URLs){
            nav.push((
                <li className="py-3">
                    <NavLink 
                       exact to={this.state.URLs[URL]}
                        activeClassName="text-green-400"
                    >
                    {URL}
                    </NavLink>

                </li>
            ))
        }

        return nav
    }
    render() {
        return this.links()
    }
}
