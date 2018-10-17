import React, {Component} from 'react';
import Header from './Header';
import {BrowserRouter, Route} from 'react-router-dom';
import HollywoodBeach from "./Beaches/HollywoodBeach";
import GoldenBeach from './Beaches/GoldenBeach';
import SunnyIslesBeach from './Beaches/SunnyIslesBeach';
import HauloverBeach from './Beaches/HauloverBeach';
import SouthBeach from './Beaches/SouthBeach';


class Home extends Component{
  render(){
    return(
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Header} />
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
