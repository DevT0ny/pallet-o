import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Pallets from './components/Pallets'
import Header from './components/Header'
function App() {
  return (
    <div className="flex flex-row ">
    <header className="w-48 ">
      <div className="w-10 h-10 rounded-full bg-gray-700 border-2 mx-auto">&times;</div>
      <ul className="h-full w-full pl-12">
        <Header />
      </ul>
    </header>
      <Switch>
        <Route  exact path="/">
          <Home/>
        </Route>
        <Route  path="/pallets">
          <Pallets/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
