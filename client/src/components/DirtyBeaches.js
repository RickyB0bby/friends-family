//Filter 'Beach' from API data
import React, {Component} from 'react';
import Beach from './Beach'

class DirtyBeaches extends Component{
  constructor(){
    super()
    this.state={ show: false};
    this.outputBeach = this.outputBeach.bind(this)
  }
  outputBeach = () => {
    const { show } = this.state
    this.setState({ show: !show})
  }
  render(){
    return(
      <div>
        <ul>
          <li onClick={this.outputBeach}>Dirty Beach</li>
            {this.state.show && <Beach/>}
        </ul>
      </div>
    )
  }
}

export default DirtyBeaches
