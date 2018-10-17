import React, {Component} from 'react';
import Header from './Header';
import {BrowserRouter, Route} from 'react-router-dom';
import HollywoodBeach from "./HollywoodBeach";
import GoldenBeach from './GoldenBeach';
import SunnyIslesBeach from './SunnyIslesBeach';
import HauloverBeach from './HauloverBeach';
import SouthBeach from './SouthBeach';
import axios from 'axios';
import Results from './Results';


class Home extends Component{
  constructor(){
    super();
    this.state = {
                  show: false ,
                  beaches: []
                 };
    // this.outputBeaches = this.outputBeaches.bind(this)
    this.beachClick = this.beachClick.bind(this)
  }

  async componentDidMount() {
      let {data} = await axios.get('/beaches')
      this.setState({beaches: data})
      console.log(this.state);
  }

  beachClick(index){
    let currentBeaches = this.state.beaches
    currentBeaches[index].clean = false
    this.setState({beaches: currentBeaches})
  }
  
  render(){
    return(
        <BrowserRouter>
          <div>
            <Route exact path='/' component={()=>{ return <BeachList beaches={this.state.beaches}/>}} />
            <Route path='/hollywoodbeach' component={()=>{return <HollywoodBeach bIndex={0} onClickBeach={this.beachClick}/>}} />
            <Route path='/goldenbeach' component={GoldenBeach} />
            <Route path='/sunnyislesbeach' component={SunnyIslesBeach} />
            <Route path='/hauloverbeach' component={HauloverBeach} />
            <Route path='/southbeach' component={()=>{ return <SouthBeach bIndex={4} onClickBeach={this.beachClick}/>}} />
            <Route path='/Results' component={Results} />
          </div>
         </BrowserRouter>
    )
  }
}

export default Home
