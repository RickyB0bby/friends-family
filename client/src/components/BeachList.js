import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Footer from './Footer';
import '../BeachList.css'
import HollywoodBeach from './HollywoodBeach'

export default class BeachList extends Component {
    constructor(props) {
        super();
        this.state = {
            userZip: [],
            results: []
        }
        this.state["beaches"] = props.beaches
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

    getBeaches(){
        let codes = this.state.results.map(function(el, i){
            return <li className="beaches" key={i}><Button id="beachButtons" variant="contained" color="secondary">{el.city}</Button></li>
        })
        return codes
    }

    render() {
        return (
            <div>
                <header className="header">
                    <h1 className="greet">Welcome to Dirty Beaches</h1>
                    <p className="findBeach">Enter your zip code to find a beach near you!</p>
                </header>
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
                <section id="background-color">
                    <div className="list-container">
                        <ul>
                            <Link to={{pathname: '/hollywoodbeach', state: {beachClick: this.beachClick}}}>{this.getBeaches()[0]}</Link>
                            <Link to="/goldenbeach">{this.getBeaches()[1]}</Link>
                            <Link to="/sunnyislesbeach">{this.getBeaches()[2]}</Link>
                            <Link to="/hauloverbeach">{this.getBeaches()[3]}</Link>
                            <Link to="/southbeach">{this.getBeaches()[4]}</Link>

                        </ul>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
