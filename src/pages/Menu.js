import React, { Component } from "react";
import "../styling/menu.css";

class Menu extends Component {
  render() {
    return (
      <div className ="menu-container">
        <div className="afhaal">
          <div className="afhaal-text">Afhaal</div>
        </div>
        <div className="restaurant">
          Restaurant
        </div>  
      </div>
    );
  }
}
 
export default Menu;