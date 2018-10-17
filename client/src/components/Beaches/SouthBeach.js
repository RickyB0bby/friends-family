import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SouthBeachMap from '../SouthBeachMap';
import Button from '@material-ui/core/Button';
import '../../BeachList.css'



export default class SouthBeach extends Component {

    constructor(props){
      super();
      this.onClickBeach = props.onClickBeach;
      this.bIndex = props.bIndex;
    }

    render() {
        return (
        <div className="south-beach-main">
            <h1 id="south-beach">South Beach</h1>
            <SouthBeachMap />
            <p>South Beach is known for its gorgeous beaches and the glamorous scene around its happening night spots and celebrity-chef eateries. On Ocean Drive, known for its well-preserved art deco architecture, outdoor cafes offer a ringside view of the scene.</p>
            <span>When you're finished doing your part, simply click "CLEANED!".</span>           
            <Link to="/Results" className="done">
              <Button id="beachButtons"  className="callOutButton" onClick={(event)=>{this.onClickBeach(this.bIndex)}}>Cleaned!</Button>
            </Link>
        </div>
        )
    }

    callOut(){
      this.state.beaches.setState({clean: false})
      console.log(this.state.beaches.clean)

    }
}
