import React, {Component} from 'react';
import axios from 'axios';

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
        this.setState({userZip: data.zip_codes})

        let result = [];
        beaches.filter(function(newData) {
            // eslint-disable-next-line
            return userZip.filter(function(oldData) {
              if (newData.zip_code === oldData.zip_code) {
                result.push(newData)
              }
            })
          })
          this.setState({results: result})
        //   console.log("this is what we are looking at", this.state.results)

    }

    async componentDidMount() {
        let {data} = await axios.get('/beaches')
        this.setState({beaches: data})
    }

    getZipCodes(){
        let codes = this.state.results.map(function(el, i){
            return <li key={i}>{el.city}</li>
        })
        return codes
    }

    render() {
        return (
            <div>
                <input id="zippy" type="text" name="zipcode" placeholder="Enter zip code"/>
                <button onClick={this.handleZip}>Go!</button>
                {this.getZipCodes()}
                <p>{this.state.results}</p>
            </div>
        )
    }
}

