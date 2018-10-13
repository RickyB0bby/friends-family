//Filter 'Beach' from API data
import React, {Component} from 'react';
import Beach from './Beach'

class DirtyBeaches extends React{
  constructor(){
    super();
    this.state={ show: false};

  }
  render(){
    return(
      <div>
        //list
        <ul>
          <li>Dirty Beach</li>
        </ul>
      </div>
    )
  }
}

export default DirtyBeaches
