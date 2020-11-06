import React from 'react';
import ProcessTwo from './process2.png';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class ProcessTwoPage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/processthreepage">
                <img className='process2' src={ProcessTwo}/>
                </Link>
            </div>


        )
    

    }
}

export default ProcessTwoPage;