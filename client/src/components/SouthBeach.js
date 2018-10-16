import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class SouthBeach extends Component {

    constructor(props){
      super();
      this.onClickBeach = props.onClickBeach;
      this.bIndex = props.bIndex;
    }

    render() {
        return (
        <div>
            <h1>South Beach</h1>
            <p>"South Beach is known for its beaches and the glamorous scene around its happening night spots and celebrity-chef eateries. Chain stores and indie fashion shops line pedestrian shopping strip Lincoln Road Mall. On Ocean Drive, known for its well-preserved art deco architecture, outdoor cafes offer a ringside view of the scene. Museums include the Wolfsonian-FIU, which has a collection of modern art and objects."</p>
            <Link to="/Results">
              <button className="callOutButton" onClick={(event)=>{this.onClickBeach(this.bIndex)}}>Dirty!</button>
            </Link>
        </div>
        )
    }

    callOut(){
      this.state.beaches.setState({clean: false})
      console.log(this.state.beaches.clean)
    }
}
