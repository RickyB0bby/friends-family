import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class BeachList extends Component {
    constructor() {
        super();
        this.state = {
            beaches: [],
            userZip: [],
            results: []
        }
        this.handleZip = this.handleZip.bind(this);
    }
    
    async handleZip() {
        const {userZip, beaches} = this.state
        const zip = document.getElementById("zippy").value
        let {data} = await axios.get(`/userZip/${zip}`)
        await this.setState({userZip: data.zip_codes})

        let result = [];
        console.log("BEaches", beaches);
        beaches.filter(function(newData) {
            // eslint-disable-next-line
            console.log("User zip", userZip);
            return userZip.filter(function(oldData) {
              if (newData.zip_code === oldData.zip_code) { 
                result.push(newData)
              }
            })
          })
          console.log(result)
          this.setState({results: result})
            console.log("this is what we are looking at", this.state.results)

    }

    async componentDidMount() {
        let {data} = await axios.get('/beaches')
        this.setState({beaches: data})
    }

    getBeaches(){
        let codes = this.state.results.map(function(el, i){
            return <li key={i}>{el.city}</li>
        })
        return codes
    }

    render() {
        return (
            <div>
                <h1>Welcome to Dirty Beaches</h1>
                <p>Let's find a beach near you!</p>
                <input id="zippy" type="text" name="zipcode" placeholder="Enter zip code"/>
                <button onClick={this.handleZip}>Go!</button>
                <div>
                    <ul>
                        <Link to="/hollywoodbeach">{this.getBeaches()[0]}</Link>
                        {this.getBeaches()[1]}
                        {this.getBeaches()[2]}
                        {this.getBeaches()[3]}
                        {this.getBeaches()[4]}
                        {this.getBeaches()[5]}
                    </ul>
                </div>
                {/* <p>{this.state.results}</p> */}
            </div>
        )
    }
}

