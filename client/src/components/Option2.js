import React, {Component} from 'react';
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
        <div className="abox1" id="dbox">
        <div className="boxy2">
          <h2>Call out a Dirty Beach!</h2>
          <p>Are you tired of visiting your beach, only to find out it’s dirty? Call out that Dirty Beach so that it can get cleaned up!</p>
        </div>
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
