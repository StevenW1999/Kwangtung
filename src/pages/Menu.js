import React, { Component } from "react";
import "../styling/menu.css";

class Menu extends Component {
  render() {
    return (
      <div className ="container">
        <div className="afhaal">
          Afhaal
        </div>
        <div className="restaurant">
          Restaurant
        </div>  
      </div>
    );
  }
}
 
export default Menu;