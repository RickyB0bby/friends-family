
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Footer from "./Footer";
import MainMap from "./MainMap";
import "../BeachList.css";
import '../CSS/List.css'



export default class BeachList extends Component {
  constructor() {
    super();
    this.state = {
      beaches: [],
      userZip: [],
      results: [],
      show: false
    };
    this.handleZip = this.handleZip.bind(this);
    this.handleMap = this.handleMap.bind(this);
  }

  handleMap = event => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  async handleZip() {
    const { beaches } = this.state;
    const zip = document.getElementById("zippy").value;
    let { data } = await axios.get(`/userZip/${zip}`);
    await this.setState({ userZip: data.zip_codes });

    let result = [];
    beaches.forEach(newData => {
      // eslint-disable-next-line
      return this.state.userZip.forEach(oldData => {
        if (newData.zip_code === oldData.zip_code) {
          result.push(newData);
        }
      });
    });
    this.setState({ results: result });
  }

  async componentDidMount() {
    let { data } = await axios.get("/beaches");
    this.setState({ beaches: data });
  }


  getBeaches() {
    let codes = this.state.results.map(function(el, i) {
      return (
        <li className="beaches" key={i}><Button id="beachButtons" variant="contained" color="secondary">{el.city}</Button></li>
      );
    });
    return codes;
  }

  render() {
    return (
      <div>
        <div className="zip-input">
          <TextField id="zippy" type="text" name="zipcode" placeholder="Enter zip code"
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className="go-button">
          <Button id="go"onClick={e => { this.handleMap(); this.handleZip(e); }}>Go!</Button>
        </div>
        <span className="map-span">{this.state.show && <MainMap />}</span>
        <section id="background-color">
          <div className="list-container">
            <ul>
              <Link to="/hollywoodbeach">{this.getBeaches()[0]}</Link>
              <Link to="/goldenbeach">{this.getBeaches()[1]}</Link>
              <Link to="/sunnyislesbeach">{this.getBeaches()[2]}</Link>
              <Link to="/hauloverbeach">{this.getBeaches()[3]}</Link>
              <Link to="/southbeach">{this.getBeaches()[4]}</Link>
            </ul>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
