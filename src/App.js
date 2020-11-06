import logo from './logo.svg';
import './App.css';
import Body from './Component/Body.js';
import Search from './Component/Search.js';
import {FormControl, InputGroup, ProgressBar, Table} from 'react-bootstrap';
import Coordinates from './Component/Coordinates';
import Deals from './Component/Deals';
import Switch from 'react-bootstrap/esm/Switch';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AllyDashboard from './Component/AllyDashboardImage.png';
import ProcessOne from './Component/process1.png';
import ProcessTwo from './Component/process2.png';
import ProcessThree from './Component/process3.png';
import ProcessFour from './Component/process4.png';
import Navbar from './Component/Navbar';


function App() {
  return (
    <div className="App">
      
      <div>
      <Link to="/deals">
      <img className='dashboard-image' src={AllyDashboard}/>
      </Link>
      </div>

      <div>
        <Link to='/processtwopage'> 
        <img className='process1' src={ProcessOne}/>
        </Link>
      </div>

      {/* <div> My Location </div>
      <Search/>
      
      <p>
        -
      </p> */}

      {/* <Navbar /> */}

      {/* <p>
        -
      </p>
      

      <Deals />

      <p>
        -
      </p>

      <Body /> */}

      {/* <Coordinates/> */}

      {/* <p>
        -
      </p> */}


    </div>
  );
}

export default App;
