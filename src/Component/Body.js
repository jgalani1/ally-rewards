import React, {Component} from 'react';
import {FormControl, InputGroup, ProgressBar, Table} from 'react-bootstrap';
import SpendingTracker from './SpendingTracker.png';
import Progressbar from './Progressbar.js';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// const place_one_progress = 60;
// const place_two_progress = 40;
// const place_three_progress = 20;
// const place_four_progress = 80;
// const place_five_progress = 10;


class Body extends Component {
    
    state = {
        date: null,
        amount: null,
        description: null,
        location: null,
        transactions: []
    }


//     <script defer
//     src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap">
// </script>



    //Methods to insert Date, Amount, Description, and Location to API directly from the website
    // addDate = (e) => {
    //     e.preventDefault();
    //     this.setState({date: e.target.value});
    // }

    // addAmount = (e) => {
    //     e.preventDefault();
    //     this.setState({amount: e.target.value});
    // }

    // addDescription = (e) => {
    //     e.preventDefault();
    //     this.setState({description: e.target.value});
    // }

    // addLocation = (e) => {
    //     e.preventDefault();
    //     this.setState({location: e.target.value});
    // }

    //Calling a get request to the transaction data endpoint
    showTransactions = async () => {
        let result;
        let destination;
        result = await fetch('http://localhost:8080/transactiondata/all')
        destination = await result.json()
        console.log(destination)
        this.setState({transactions : destination})
    }

    //Calling a post request to the transaction data endpoint using the state methods above...learn how JSON.stringify works...it seems usefull for the future
    // insertTransaction = () => {
    //     fetch('http://localhost:8080/transactiondata/all', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         date: this.state.date,
    //         amount: this.state.amount,
    //         description: this.state.description,
    //         location: this.state.location
    //     })
    // })
    // }

    //Table to map out the queried results in....just their column headers...using bootstrap
    Transaction = ({date, amount, description, location}) => 
        <tr>
            <td>{date}</td>
            <td>{amount}</td>
            <td>{description}</td>
            <td>{location}</td>
        </tr>
    
    componentDidMount() {
        this.showTransactions()
    }


    render () {
        return (
            <div className="body">
                <h1> Transaction History </h1>
                {/* <p>
                    Date: <input value= {this.state.date} onChange= {this.updateDate} />
                    Amount: <input value= {this.state.date} onChange= {this.updateDate} />
                    Description: <input value= {this.state.date} onChange= {this.updateDate} />
                    Location: <input value= {this.state.date} onChange= {this.updateDate} />
                </p> */}

                {/* <p>
                    <button onClick= {this.showTransactions}> Show transactions</button> 
                    <button onClick= {this.insertTransaction}> Add transaction</button>
                </p> */}

                <Table> 
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Description</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.state.transactions.map(transaction => <this.Transaction key={transaction.id} date={transaction.date} amount={transaction.amount} description={transaction.description} location={transaction.location} />)}
                    </tbody>
                </Table>

                <img className='image' src={SpendingTracker}/>

                <h2> New Table Test </h2>

                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>

                {/* <p className='topPlaces'>
                    My Top 5 Places:
                    <ol> */}
                        {/* <li>Target <ProgressBar className='progress_bar' animated now={place_one_progress} label={`${place_one_progress}%`} variant='info'  style={{ maxWidth: 300 }} />  </li> */}
                        {/* <li>Target <Progressbar completed='60' bgcolor='#90ee90'/> </li>
                        <li>Online</li>
                        <li>Olive Garden </li>
                        <li>Old Navy </li>
                        <li>McDonalds </li>
                    </ol>
                </p> */}

            </div>
        )
    }

}

export default Body;