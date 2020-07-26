import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class SlideBar extends Component {
    state={
        urls:[
          {title:"Clipboard" , url:"/"},
          {title:"Pallets" , url:"/pallets"},
          {title:"Shit" , url:"/shit"},
          {title:"About" , url:"/about"}
        ]
    }

    render() {

        return (
          <nav className="w-48 slidebar h-screen fixed shadow-md">
              <h2 className="slidebar__logo">Insta-color</h2>
              <ul className="h-full w-full p-0 ">
                  {
                    this.state.urls.map(({title,url},index)=>(
                      <li className="w-full " key={index} >
                        <NavLink
                          exact to={url}
                          activeClassName="slidebar__link--active "
                          className="slidebar__link"
                        >
                        {title}
                        </NavLink>
                      </li>
                    ))
                  }
              </ul>
          </nav>
        )
    }
}
