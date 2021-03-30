import React, { Component } from "react";
import './Navbar.css';

// import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {

  state={clicked:false}
handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
}
  render() {
    return (
      <nav className="nav" id="navbar">

          <p className="logo-ut">UTTARANCHAL TRAVEL</p> <i class="fas fa-route fa-3x"></i>

      </nav>
    );
  }
}
