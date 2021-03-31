import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';



import Navbar from "./Navbar";
import Landing from "./landing";
import Aboutus from "./aboutus";
import Services from "./services";




function App(){
return(
  <div className="App">
  

 <Navbar/> 

<Landing/> 
<Aboutus/>
<Services/>

    </div>
    

);

}


export default App;