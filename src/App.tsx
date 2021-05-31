import React from 'react';
import './App.css';
import { Navbar } from './Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Home } from './Home';
import { Computing } from './Computing';
import { CPU } from './Pages/CPU';
import { Networks } from './Pages/Networks';

function App() {
  return (
    <div className="App">
      <Router>
          <div className="TopBar">
            <h1 className="QuickFlash"><span className="ExpandingText">Charlie's</span> <span className="ExpandingText2">Revision</span> <span className="ExpandingText3">Website !!!</span></h1>
          </div>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/cringe_loser_gamer_house" exact>
              <h1>Baby Rage</h1>
            </Route>
            <Route path="/ball_goes_boing" exact>
              <h1>Boiiing</h1>
            </Route>
            <Route path="/chad_subject_for_chad_gamers" exact>
              <Computing />
            </Route>
            <Route path="/chad_subject_for_chad_gamers/processor_architecture">
              <CPU />
            </Route>
            <Route path="/chad_subject_for_chad_gamers/networks">
              <Networks />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
