import React, {Component} from 'react';
import Home from './Home';
import BeachList from './BeachList';
import {Link} from 'react-router-dom';
import '../CSS/Results.css'


export default class SouthBeach extends Component {

    constructor(props){
      super();
      this.onClickBeach = props.onClickBeach;
      this.bIndex = props.bIndex;
    }

    render() {
        return (
        <div>
            <h1>Thanks for calling out a Dirty Beach!</h1>
            <Link to="/" className="button">Done!</Link>
        </div>
        )
    }

    // callOut(){
    //   this.state.beaches.setState({clean: false})
    //   console.log(this.state.beaches.clean)
    //
    // }
}
