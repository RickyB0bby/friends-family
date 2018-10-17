import React, {Component} from 'react';
import HollywoodMap from '../HollywoodMap'
import '../Map.css';

export default class HollywoodBeach extends Component {
    render() {
        return (
        <div>
          <h1>Hollywood Beach</h1>
          <HollywoodMap />
          <p>"Nestled between Miami and Ft. Lauderdale, Hollywood, Florida is known for its beautiful stretch of beach, perfect for a beach vacation. You can find unique shopping, beachfront restaurants and bars along Hollywood's Boardwalk, in addition to year long activities and live music."</p>
        </div>
        )
    }
}
