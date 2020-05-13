import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
 
class Main extends Component {
  render() {
    return (
      <div className="bg">
      <HashRouter>
        <div>
          <h1>Menu balk</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
        </div>
    );
  }
}
 
export default Main;