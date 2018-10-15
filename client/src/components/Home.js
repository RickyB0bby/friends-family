import React, {Component} from 'react';
import BeachList from './BeachList';
import {BrowserRouter, Route} from 'react-router-dom';
import HollywoodBeach from "./HollywoodBeach";
import GoldenBeach from './GoldenBeach';
import SunnyIslesBeach from './SunnyIslesBeach';
import HauloverBeach from './HauloverBeach';
import SouthBeach from './SouthBeach';

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
        <BrowserRouter>
          <div>
            <Route exact path='/' component={BeachList} />
            <Route path='/hollywoodbeach' component={HollywoodBeach} />
            <Route path='/goldenbeach' component={GoldenBeach} />
            <Route path='/sunnyislesbeach' component={SunnyIslesBeach} />
            <Route path='/hauloverbeach' component={HauloverBeach} />
            <Route path='/southbeach' component={SouthBeach} />
          </div>
         </BrowserRouter>
    )
  }
}

export default Home
