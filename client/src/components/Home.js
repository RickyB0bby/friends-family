import React, {Component} from 'react';
import BeachList from './BeachList';
import {BrowserRouter, Route} from 'react-router-dom'
import HollywoodBeach from "./HollywoodBeach";

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
          <BeachList />
            <Route exact path='/' Component={Home} />
            <Route path='/hollywoodbeach' Component={HollywoodBeach} />
          </div>
         </BrowserRouter>
    )
  }
}

export default Home
