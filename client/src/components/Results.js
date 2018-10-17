import React, {Component} from 'react';
// import Home from './Home';
// import BeachList from './BeachList';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import '../BeachList.css'


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
            <Link to="/"><Button id="beachButtons">Done!</Button></Link>
        </div>
        )
    }

    // callOut(){
    //   this.state.beaches.setState({clean: false})
    //   console.log(this.state.beaches.clean)
    //
    // }
}
