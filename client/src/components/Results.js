import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
            <h1>Thanks for cleaning a Dirty Beach!</h1>
            <Link to="/" className="button">DONE!</Link>
        </div>
        )
    }

    // callOut(){
    //   this.state.beaches.setState({clean: false})
    //   console.log(this.state.beaches.clean)
    //
    // }
}
