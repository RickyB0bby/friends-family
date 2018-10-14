import React, {Component} from 'react';
import DirtyBeaches from './DirtyBeaches';

class Home extends Component{
  constructor(){
    super();
    this.state = { show: false };
    this.outputBeaches = this.outputBeaches.bind(this)
  }
  outputBeaches = (event) => {
    event.preventDefault()
    const {show} = this.state
    this.setState({show: !show})
  }
  render(){
    return(
      <div>
        <h1> Welcome to Dirty Beaches </h1>
        <h3> Description</h3>
        <p>Let's find a dirty beach!</p>
        <form>
          <label>
           Enter Zip Code
           <input type="text" />
          </label>
          <input type="submit" value="Find a dirty beach near you!" onClick = {this.outputBeaches}/>
        </form>
         {this.state.show && <DirtyBeaches/>}
      </div>
    )
  }
}

export default Home
