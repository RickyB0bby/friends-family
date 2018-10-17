import React, {Component} from 'react';
import BeachList from './BeachList';
import anime from 'animejs';
import '../CSS/Option2.css'


class Option2 extends Component{
  constructor(){
    super();
    this.state = { show: false };
    this.outputButton2 = this.outputButton2.bind(this)
  }
  outputButton2 (event) {
    event.preventDefault()
    const {show} = this.state
    this.setState({show: !show})
  }
  componentDidMount(){
   var specificPropertyParameters = anime({
     targets: '#dbox .boxy2',
     // translateX: {
     //   value: 250,
     //   duration: 800
     // },
     // rotate: {
     //   value: 180,
     //   duration: 1800,
     //   easing: 'easeInOutSine'
     // },
     scale: {
       value: 1.5,
       duration: 1600,
       delay: 800,
       easing: 'easeInOutQuart'
     },
     delay: 250,
     direction: 'reverse', // All properties except 'scale' inherit 250ms delay
   })
  }

  render(){
    return(
        <div className="abox1" id="dbox">
          <h3>Call out a Dirty Beach!</h3>
          <p className="boxy2">Are you tired of visiting your beach, only to find out it’s dirty? Call out that Dirty Beach so that it can get cleaned up!</p>
          <div className="zip-input">
          <button className="button2" onClick ={(ev) => {this.outputButton2(ev); this.props.toggleForm()}}>Report a beach!</button>
          </div>
          {this.state.show
            // && <BeachList/>
          }
      </div>
    )
  }
}

export default Option2
