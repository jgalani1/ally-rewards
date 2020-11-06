import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Deals from './Component/Deals';
import Body from './Component/Body';
import ProcessTwoPage from './Component/ProcessTwoPage';
import ProcessThreePage from './Component/ProcessThreePage';
import ProcessFourPage from './Component/ProcessFourPage';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component= {App} />
      <Route path="/deals" component={Deals} />
      <Route path="/body" component={Body} />
      <Route path='/processtwopage' component={ProcessTwoPage}/>
      <Route path='/processthreepage' component={ProcessThreePage}/>
      <Route path='/processfourpage' component={ProcessFourPage}/>
    </div>
  </Router>
)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
