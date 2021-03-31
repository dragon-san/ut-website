
import React, { Component } from 'react';


import './aboutus.css';
import pic from "./ntl_monsoon.jpg";
class aboutus extends Component{
  render() {
    return (

    <div className="aboutus-container" >
        
 
<img src={pic} height='800'width="100%"  />
<div class="text-block">
    <h4>About Us</h4>
    <p>"The spirit soars where the air goes thin, the mountains are calling let us take you within"
   <br></br> We believe that travelling is about exploring the unknown, bundled with adventures and interactions with people, art, music, food and culture.
    Uttaranchal Travels is based in Nainital, exploring the Devbhoomi since 25 years with a vast experience in serving individuals, small and large groups to make thier travelling hastle free and comfortable.   
  

    </p>
  </div>

    



    </div>
);
}
}
export default aboutus;