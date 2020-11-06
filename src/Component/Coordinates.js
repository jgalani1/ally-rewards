// import PropTypes from "prop-types"
// import React, {Component} from 'react';
// import ReactGoogleMapLoader from "react-google-maps-loader"
// import ReactGooglePlacesSuggest from "react-google-places-suggest"
// import Geocode from "react-geocode";
// import { GoogleComponent } from 'react-google-location' 

// const API_KEY = "AIzaSyBRmajpUGlLdnzzoBWockX7LnjU3mJ3znU";

// class Coordinates extends Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         place: "",
//       };
//     } 

//     getCoordinates = () => {
//         console.log(this.state.place.coordinates);

//     }
   
//     render() {
//       return (
//         <div >
//            <GoogleComponent
//             apiKey={API_KEY}
//             language={'en'}
//             country={'country:in|country:us'}
//             coordinates={true}
//             locationBoxStyle={'custom-style'}
//             locationListStyle={'custom-style-list'}
//             onChange={(e) => { this.setState({ place: e }) }}>
            
//             {/* <input value={this.state.latitude}> Latitude</input>
//             <input value={this.state.longitude}> Longitude</input> */}
//             </GoogleComponent>

//             {/* <input value={this.state.lat}> Latitude</input> */}
            
//             {/* <button onClick={(e) => { this.setState({ place: e }) }} > Search </button> */}

//         </div>
   
//       )
//     } 
//   }
   
   
//   export default Coordinates;