import React from 'react';
import ProcessThree from './process3.png';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class ProcessThreePage extends React.Component {
    render() {
        return (
            <div>
                <Link to="processfourpage">
                <img className='process3' src={ProcessThree}/>
                </Link>
            </div>


        )
    

    }
}

export default ProcessThreePage;