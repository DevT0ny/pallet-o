import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"

import ColorClipboard from './components/ColorClipboard'
import Shades from './components/Shades'
import SlideBar from './components/Sidebar'
import Test from './components/Test'
import TextClipboard from './components/TextClipboard'

import AlertContextProvider from './contexts/AlertContext'

function App() {
  return (
    < >
      <SlideBar />
      <div className=" bg-gray-300  h-full lg:ml-48 w-auto mt-20 ">
        { /* <div id="popup" className="absolute w-1/12 h-8  top-0 z-30  font-bold bg-blue-700 -500 rounded mt-1 text-center text-white" style={{marginLeft:39+'%'}} ></div>*/}

            <div id="Alert" className="hidden absolute z-20 p-3 bg-indigo-800 text-indigo-100 leading-none lg:rounded-full flex" role="alert" style={{marginLeft:39+'%'}} >
              <span className="font-semibold mx-4 text-center">Copied</span>
            </div>
            <AlertContextProvider>

              <Switch>
                <Route  exact path="/">
                  <ColorClipboard />
                </Route>
                <Route  path="/shades">
                  <Shades/>
                </Route>
                <Route  path="/textclipboard">
                  <TextClipboard/>
                </Route>
                <Route  path="/test">
                  <Test/>
                </Route>
              </Switch>

            </AlertContextProvider>

            </div>
    </ >
  );
}

export default App;
