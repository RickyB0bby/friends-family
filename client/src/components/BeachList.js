import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../CSS/List.css'
import Footer from './Footer';
import '../BeachList.css'



export default class BeachList extends Component {
    constructor() {
        super();
        this.state = {
            beaches: [],
            userZip: [],
            results: []
        }
        this.handleZip = this.handleZip.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(){
    //     console.log("hello, clicked.")
    //     this.props.history.push('/hollywoodbeach')
    // }

    async handleZip() {
        const {beaches} = this.state
        const zip = document.getElementById("zippy").value
        let {data} = await axios.get(`/userZip/${zip}`)
        await this.setState({userZip: data.zip_codes})

        let result = [];
        beaches.forEach((newData) => {
            // eslint-disable-next-line
            return this.state.userZip.forEach((oldData) => {
              if (newData.zip_code === oldData.zip_code) {
                result.push(newData)
              }
            })
          })
          console.log(result)
          this.setState({results: result})

    }

    async componentDidMount() {
        let {data} = await axios.get('/beaches')
        this.setState({beaches: data})
    }

    getBeaches(){
        let codes = this.state.results.map(function(el, i){
            return <li className="beaches" key={i}><Button id="beachButtons" variant="contained" color="secondary">{el.city}</Button></li>
        })
        return codes
    }

    render() {
        return (
            <div>
              <div id="form">
              <div className="zip-input">
                   <TextField
                       id="zippy" type="text" name="zipcode" placeholder="Enter zip code"
                       margin="normal"
                       variant="outlined"
                  />
               </div>
               <div className="go-button">
                   <Button id="go" onClick={this.handleZip}>Go!</Button>
               </div>
             </div>
                <div className="list-container">
                    <ul>
                        <Link to="/hollywoodbeach">{this.getBeaches()[0]}</Link>
                        <Link to="/goldenbeach">{this.getBeaches()[1]}</Link>
                        <Link to="/sunnyislesbeach">{this.getBeaches()[2]}</Link>
                        <Link to="/hauloverbeach">{this.getBeaches()[3]}</Link>
                        <Link to="/southbeach">{this.getBeaches()[4]}</Link>
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }
}
