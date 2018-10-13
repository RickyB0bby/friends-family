import React, {Component} from 'react';
import DirtyBeaches from './DirtyBeaches';

class Home extends Component{
  render(){
    return(
      <div>
        <h1> Welcome to Dirty Beaches </h1>
        <h3> Find a dirty beach near you! </h3>
        <form>
          <label>
           Choose search radius
           <input type="text" />
          </label>
          <input type="submit" value="Find a dirty beach near you!" />
        </form>
        <DirtyBeaches/>
      </div>
    )
  }
}

export default Home
