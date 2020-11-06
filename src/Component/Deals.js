import React, {Component} from 'react';
import {FormControl, InputGroup, ProgressBar, Table} from 'react-bootstrap';
import Search from './Search';
import { withRouter } from "react-router-dom";
import AllyHeaderImage from './AllyHeaderImage.png';

class Deals extends Component {
    state = {
        account: null,
        points: null,
        link: null,
        message: "New notification here",
        deals: [],
        offers: [],
        card: null,
        offer: null,
        reward: null
    }

    // url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=35.225480,-80.848550&radius=1500&type=restaurant,gas_station,supermarket,store,pet_store,loding&key=AIzaSyBRmajpUGlLdnzzoBWockX7LnjU3mJ3znU"
    

    showDeals = async () => {
        let result;
        let destination;
        result = await fetch('http://localhost:8080/dealdata/all')
        destination = await result.json()
        this.setState({deals : destination})
        this.setState({message: "New rewards deals near you!"})
    }

    showOffers = async () => {
        let result;
        let response;
        result = await fetch('http://localhost:8080/offerdata/all')
        response = await result.json()
        this.setState({offers : response})
        this.setState({message: "New rewards deals near you!"})
    }

    Deal = ({account, points, link}) => 
    <tr>
        <td>{account}</td>
        <td>{points}</td>
        <td>{link}</td>
    </tr>

    Offer = ({card, offer, reward}) => 
    <tr>
        <td>{card}</td>
        <td>{offer}</td>
        <td>{reward}</td>
    </tr>


    componentDidMount() {
        this.showDeals()
        this.showOffers()
    }

    

    render () {
        return (
            <div className="deals">
            <img className='ally-header-image' src={AllyHeaderImage}/>
            
            <h1>Reward Zone</h1>

            {/* <Search changer={this.showDeals} /> */}

            {/* <button onClick={this.showDeals}> Show Deals</button> */}

            

            <h2>My Points</h2>

            <Table> 
                    <thead>
                        <tr>
                            <th>Account</th>
                            <th>Reward PTS</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.state.deals.map(deals => <this.Deal key={deals.id} account={deals.account} points={deals.points} link={deals.link} />)}
                    </tbody>
            </Table>

            <h2>My Offers</h2>
           
            <Table> 
                    <thead>
                        <tr>
                            <th>Card</th>
                            <th>Offer</th>
                            <th>Reward</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.state.offers.map(offers => <this.Offer key={offers.id} card={offers.card} offer={offers.offer} reward={offers.reward} />)}
                    </tbody>
            </Table>


            {/* <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text> Notifications </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as='textarea' aria-label='With textarea' value={this.state.message} />
            </InputGroup> */}


            </div>
        )
    }
}

export default Deals;