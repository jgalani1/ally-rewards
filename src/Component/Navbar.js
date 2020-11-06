import React from 'react';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

function Navbar() {
    return (
      <div className="App">

        <div><Link to="/"> Home Page</Link> </div>
        <div><Link to="/deals"> Cashback Deals </Link> </div>
        <Link to="/body"> Transaction History </Link>   
   
      </div>
    );
}
  
export default Navbar;