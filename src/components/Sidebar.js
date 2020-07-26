import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class SlideBar extends Component {
    state={
        URLs:{
            Clipboard:"/",
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
              activeClassName="slidebar__link--active "
              className="slidebar__link"
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
            <nav className="w-48 slidebar h-screen fixed shadow-md">
                <h2 className="slidebar__logo">Insta-color</h2>
                <ul className="h-full w-full p-0 ">
                    {this.links()}
                </ul>
            </nav>
        )
    }
}
