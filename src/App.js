import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"
import Clipboard from './components/Clipboard'
import Pallets from './components/Pallets'
import SlideBar from './components/Sidebar'
// import Header from './components/Header';
import Test from './components/Test'
// import ClipboardContextProvider from './contexts/ClipboardContext'
// import HeaderContextProvider from './contexts/HeaderContext'


function App() {
  return (
    < >
      <SlideBar />
      <div className=" bg-gray-300  h-full lg:ml-48 w-auto mt-20 ">
          <div id="popup" className="absolute w-1/12 h-8  top-0 z-30  font-bold bg-blue-700 -500 rounded mt-1 text-center text-white" style={{marginLeft:39+'%'}} ></div>
              <Switch>
                <Route  exact path="/">
                  <Clipboard />
                </Route>
                <Route  path="/pallets">
                  <Pallets/>
                </Route>
                <Route  path="/test">
                  <Test/>
                </Route>
              </Switch>
            </div>
    </ >
  );
}

export default App;
