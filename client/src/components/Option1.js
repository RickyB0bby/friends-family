import React, {Component} from 'react';
import BeachList from './BeachList';
import anime from 'animejs';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import '../CSS/Option1.css'

class Option1 extends Component{
  constructor(){
    super();
    this.state = { show: false };
    this.outputButton1 = this.outputButton1.bind(this)
  }
  outputButton1 = (event) => {
    event.preventDefault()
    const {show} = this.state
    this.setState({show: !show})
  };

 componentDidMount(){
  var specificPropertyParameters = anime({
    targets: '#dbox .boxy1',
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
    direction: 'reverse',
  })
}

  render(){
    return(
      <div className="abox" id="dbox">
         <h3> Clean a Dirty Beach! </h3>
        <p className="boxy1">Want some good karma points? Go here to find a Dirty Beach that you can help clean up. You can even bring your friends to help!</p>
        <div className="zip-input">
        <button className="button1" onClick = {(ev) => {this.outputButton1(ev); this.props.toggleForm()}}>Find a beach!</button>
        </div>
        
      </div>
    )
  }
}

export default Option1
