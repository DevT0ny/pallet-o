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
      <div className="ml-48 h-screen bg-gray-300">
        <ClipboardContextProvider>
          <Header/>
          <Switch>
            <Route  exact path="/">
              <Clipboard />
            </Route>
            <Route  path="/pallets">
              <Pallets/>
            </Route>
          </Switch>
        </ClipboardContextProvider>
      </div>

    </>
  );
}

export default App;
