import React, {Component} from 'react';
import BeachList from './BeachList';

class Home extends Component{
  // constructor(){
  //   super();
  //   this.state = { show: false };
  //   this.outputBeaches = this.outputBeaches.bind(this)
  // }
  // outputBeaches = (event) => {
  //   event.preventDefault()
  //   const {show} = this.state
  //   this.setState({show: !show})
  // }
  render(){
    return(
      <div>
        <h1> Welcome to Dirty Beaches </h1>
        <p>Let's find a beach near you!</p>
          {/* <input type="submit" value="Find a dirty beach near you!" onClick = {this.outputBeaches}/> */}
         <BeachList />
      </div>
    )
  }
}

export default Home
