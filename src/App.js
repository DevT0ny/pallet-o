import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Pallets from './components/Pallets'
import SlideBar from './components/Sidebar'
import Header from './components/Header';
function App() {
  return (
    <>
      <SlideBar />

      <div className="ml-48 h-screen bg-gray-200">
        <Header/>
        <Switch>
          <Route  exact path="/">
            <Home/>
          </Route>
          <Route  path="/pallets">
            <Pallets/>
          </Route>
        </Switch>
      </div>

    </>
  );
}

export default App;
