import React, { Component } from 'react';
import './App.css';
import './landing.css';
import vid from "./home.mp4";


class landing extends Component  {

  render() {
  return (
    <div id="wholepage">
    <div className='landing-container'>
      <video src={vid} autoPlay loop muted />
        <p2>"A Journey Starts From The Outside And Ends Within"</p2> 
      <p1>DEVBHOOMI AWAITS</p1> 
   <p>LET'S ADVENTURE TOGETHER</p><br/>  
    </div>
    
    </div>
  );

}
}
export default landing;
