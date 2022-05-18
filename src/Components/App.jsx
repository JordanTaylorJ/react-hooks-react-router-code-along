import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import NavBar from "./NavBar";

function App() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route path="/about">
          <About/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          {/* can use exact path in lieu of Switch...  Order will matter with Switch */}
          <Route exact path="/"> 
            <Home /> 
          </Route>
        </Switch>
      </div>
    );
  }

  export default App;