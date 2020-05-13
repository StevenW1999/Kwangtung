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
        <div>
          <div className="home"></div>
        </div>
    );
  }
}
 
export default Main;