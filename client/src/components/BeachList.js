import React, {Component} from 'react';
import axios from 'axios';

export default class BeachList extends Component {
    constructor() {
        super();
        this.state = {
            beaches: [],
            userZip: []
        }
        this.handleZip = this.handleZip.bind(this);
    }
    async handleZip() {
        const {userZip, beaches} = this.state
        
        const zip = document.getElementById("zippy").value
        let {data} = await axios.get(`/userZip/${zip}`)
        this.setState({userZip: data.zip_codes})

        let results = []
        beaches.filter(function(newData) {
            return userZip.filter(function(oldData) {
              if (newData.zip_code === oldData.zip_code) {
                results.push({
                  newData
                })
              }
            })
          })
          console.log(results)
    }

    async componentDidMount() {
        let {data} = await axios.get('/beaches')
        this.setState({beaches: data})

    }

    render() {
        return (
            <div>
                <input id="zippy" type="text" name="zipcode" />
                <button onClick={this.handleZip}>CLick me!</button>
            </div>
        )
    }
}

