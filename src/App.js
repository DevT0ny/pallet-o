import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Clipboard from './components/Clipboard'
import Pallets from './components/Pallets'
import SlideBar from './components/Sidebar'
import Header from './components/Header';
import ClipboardContextProvider from './contexts/ClipboardContext'

function App() {
  return (
    < >
      <SlideBar />
      <div className=" bg-gray-300 -500 h-full lg:ml-48 ">
        <ClipboardContextProvider>
          <Header/>
          <div className="bg-gray-300 pt-16	p-4">
            <Switch>
              <Route  exact path="/">
                <Clipboard />
              </Route>
              <Route  path="/pallets">
                <Pallets/>
              </Route>
            </Switch>
          </div>

        </ClipboardContextProvider>
      </div>

    </>
  );
}

export default App;
