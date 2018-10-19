import React, {Component} from 'react';
import anime from 'animejs';
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
      <div className="boxy1">
        <h2> Clean a Dirty Beach! </h2>
        <p>Want some good karma points? Go here to find a Dirty Beach that you can help clean up. You can even bring your friends to help!</p>
      </div>
        <div className="zip-input">
        <button className="button1" onClick = {(ev) => {this.outputButton1(ev); this.props.toggleForm()}}>Find a beach!</button>
        </div>
        
      </div>
    )
  }
}

export default Option1
