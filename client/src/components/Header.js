import React, {Component} from 'react';
import Option1 from './Option1';
import Option2 from './Option2';
import anime from 'animejs';
import '../CSS/Header.css';

class Header extends Component{
  constructor(){
    super();
    this.state = { show: false };
    this.outputButton = this.outputButton.bind(this)
  }
  outputButton = (event) => {
    event.preventDefault()
    const {show} = this.state
    this.setState({show: !show})
  }

  componentDidMount() {
    setTimeout(() => {
      this.hello.style = {display: "inline"}
    }, 1500)
    anime({
      targets: ["#a3","#a2","#a1"],
      translateX: function(foo){
        return foo.getAttribute('data-x');
      },
      translateY: [
  // { value: 0, duration: 1000, elasticity: 100 },
  { value: 180, duration: 500, elasticity: 100 },
  // { value: 1000, duration: 500, delay: 100, elasticity: 100 }
],
      scale: function (foo, i, l){
        return (1 - i) + 3;
      },
      rotate: function() {return anime.random(-360,360);},
      duration: function() { return anime.random(1200, 1800); },
      duration: function() { return anime.random(800, 1600); },
      delay: function() { return anime.random(400,600); },
      direction: 'reverse',
        })
      // loop: true

      // duration: function(target) {
      //   return target.getAttribute('data-duration')
      // }
      anime({
        targets: ["#b1","#b2","#b3"],
        translateX: function(fooA){
          return fooA.getAttribute('data-x');
        },
        translateY: [
    // { value: 40, duration: 500, elasticity: 100 },
    { value: -70, duration: 500, elasticity: 100 },
    // { value: 100, duration: 500, delay: 500, elasticity: 100 }
  ],
        scale: function (fooA, i, l){
          return (1 - i) + 3;
        },
        rotate: function() {return anime.random(-360,360);},
        duration: function() { return anime.random(1200, 1800); },
        duration: function() { return anime.random(800, 1600); },
        delay: function() { return anime.random(400,600); },
        direction: 'reverse',

      })
      var svgAttributes = anime({
      targets: '#svgAttributes polygon',
      points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
      easing: 'easeInOutExpo',
      delay: function() { return anime.random(500,1000); },
      // loop: 2,
      });

  }

  render(){
    return(
      <div id="top">
        <div>
         <div className="img">
          <div className="ffoo1">
            <div className="foo" id="a3" data-x="100"></div>
            <div className="foo" id="a2" data-x="100" ></div>
            </div>
            <div className="ffoo2">
          <div className="foo" id="a1" data-x="200"></div>
          </div>
          <div id="svgAttributes">
           <div id="newSvg">
            <div id="imgLogo">
            <img id="logo" src={'/Logo.png'} style={{display: 'none'}} ref={(el) => this.hello = el}  />
            </div>
             <svg styles={{backgroundColor: 'red'}}  viewBox="0 0 128 128" className="logo">
              <polygon points="64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100 " fill="white" className="vg">
              </polygon>
            </svg>
          </div>
          </div>
          <h1 className="header"> Welcome to Dirty Beaches </h1>
            <div className="ffoo3">
          <div className="fooA a2" id="b2" data-x="-200"></div>
          </div>
           <div className="ffoo4">
            <div className="fooA a1" id="b1" data-x="-80"></div>
            <div className="fooA a3" id="b3" data-x="-300"></div>
            </div>
        </div>
        </div>
         <div className="butt">
          <div className="bbox">
            <Option1 />
          </div>
            <div className="bbox1">
             <Option2 />
           </div>
          </div>
      </div>
    )
  }
}

export default Header
