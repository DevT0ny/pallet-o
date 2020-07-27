import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class SlideBar extends Component {
    state={
        urls:[
          {
            title:"Color clipboard" ,
            url:"/",
            icon : (<svg className="slidebar__icon w-6 h-6 p-0 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 16h10v1h-10v-1zm0-1h10v-1h-10v1zm15-13v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 1h-4l-2 2h-3.898l-2.102-2h-4v18h16v-18zm-13 9h10v-1h-10v1zm0-2h10v-1h-10v1z"/></svg>)
          },
          {
            title:"Pallets" ,
            url:"/pallets",
            icon : (<svg className="slidebar__icon w-6 h-6 p-0 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M10.5 24h-7c-1.4 0-2.5-1.14-2.5-2.5v-11.64c-.662-.473-1-1.201-1-1.941 0-.376.089-.75.289-1.129 1.065-1.898 2.153-3.783 3.265-5.654.462-.737 1.211-1.136 2.045-1.136.635 0 .972.204 1.445.479.662.386 9 5.352 12.512 7.441.087.052 3.366 1.988 3.449 2.045.663.49.995 1.197.995 1.934 0 .375-.092.745-.295 1.13-1.064 1.899-2.153 3.784-3.265 5.655-.577.92-1.615 1.29-2.496 1.088-.392.234-5.826 3.75-6.252 3.968-.413.212-.762.26-1.192.26m-7.5-10.763v8.263c0 .274.221.5.5.5h4.588c-1.72-2.906-3.417-5.827-5.088-8.763m1.606-1.238c.053.092 5.681 9.797 5.726 9.859.108.139.299.181.455.098.164-.092 5.081-3.251 5.081-3.251-.639-.377-8.144-4.851-11.262-6.706m.659-9.829c-.913 1.456-3.199 5.525-3.235 5.61-.07.171-.008.366.149.464.201.12 16.023 9.547 16.177 9.571.151.022.297-.045.377-.174.942-1.584 3.206-5.55 3.232-5.601.069-.172.007-.367-.15-.465-.201-.12-15.983-9.499-16.09-9.546-.18-.074-.365-.002-.46.141m1.557 2.695c1.104 0 2 .897 2 2 0 1.104-.896 2-2 2s-2-.896-2-2c0-1.103.896-2 2-2"/></svg>)

          },
          {
            title:"Text clipboard" ,
            url:"/shit",
            icon : (<svg className="slidebar__icon w-6 h-6 p-0 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 20v1h-4v-1h.835c.258 0 .405-.178.321-.422l-.473-1.371h-2.231l-.575-1.59h2.295l-1.362-4.077-1.154 3.451-.879-2.498.921-2.493h2.222l3.033 8.516c.111.315.244.484.578.484h.469zm-6-1h1v2h-7v-2h.532c.459 0 .782-.453.633-.887l-.816-2.113h-6.232l-.815 2.113c-.149.434.174.887.633.887h1.065v2h-7v-2h.43c.593 0 1.123-.375 1.32-.935l5.507-15.065h3.952l5.507 15.065c.197.56.69.935 1.284.935zm-10.886-6h4.238l-2.259-6.199-1.979 6.199z"/></svg>)

          },
          {
            title:"About" ,
            url:"/about",
            icon : (<svg className="slidebar__icon w-6 h-6 p01 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 16h10v1h-10v-1zm0-1h10v-1h-10v1zm15-13v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 1h-4l-2 2h-3.898l-2.102-2h-4v18h16v-18zm-13 9h10v-1h-10v1zm0-2h10v-1h-10v1z"/></svg>)

          }
        ]
    }

    render() {

        return (
          <nav className="w-48 slidebar hidden lg:block h-screen fixed shadow-md">
              <h2 className="slidebar__logo">Palleto</h2>
              <ul className="h-full w-full p-0 ">
                  {
                    this.state.urls.map(({title,url,icon},index)=>(
                      <li className="w-full " key={index} >
                        <NavLink
                          exact to={url}
                          activeClassName="slidebar__link--active "
                          className="slidebar__link "
                        >{icon}
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
