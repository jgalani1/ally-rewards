import PropTypes from "prop-types"
import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
import Geocode from "react-geocode";
import { GoogleComponent } from 'react-google-location' 
import Deals from './Deals'

const API_KEY = "AIzaSyBRmajpUGlLdnzzoBWockX7LnjU3mJ3znU"
class Search extends React.Component {
  state = {
    search: "",
    value: "",
    latitude: "",
    longitude: ""
  }

  handleInputChange(e) {
    this.setState({search: e.target.value, value: e.target.value})
  }

  handleSelectSuggest(suggest) {
    console.log(suggest)
    console.log(suggest.place_id)
    this.setState({search: "", value: suggest.formatted_address})
  }

  render() {
    const {search, value} = this.state
    return (
      <ReactGoogleMapLoader
        params={{
          key: API_KEY,
          libraries: "places,geocode",
        }}
        render={googleMaps =>
          googleMaps && (
            <div>
              <ReactGooglePlacesSuggest
                autocompletionRequest={{input: search}}
                googleMaps={googleMaps}
                onSelectSuggest={this.handleSelectSuggest.bind(this)}
              >
                <input
                  type="text"
                  value={value}
                  placeholder="Search a location"
                  onChange={this.handleInputChange.bind(this)}
                /> 
              </ReactGooglePlacesSuggest>

              <button onClick={this.props.changer}> Find </button>

            </div>
          )
        }
      />
    )
  }
}

Search.propTypes = {
  googleMaps: PropTypes.object,
}

export default Search