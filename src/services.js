
import React, { Component } from 'react';

import './services.css';
import i1 from "./nainital-night.jpg";
class services extends Component{
  render() {
    return (
        <div className="service-container" >
<img src={i1}    height='750'width="100%"  />
<div class="text-block1">
    <h4>Our Tour Packages</h4>

    <p>Enjoy your tours in our luxurious cars with expert guidance from our reliable and experienced drivers </p>
  </div>
</div> 

    );
  }
}
export default services;