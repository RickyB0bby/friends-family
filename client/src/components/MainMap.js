import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from 'mapbox-gl-geocoder';
import './Map.css';
import ReactDOMServer from 'react-dom/server';
import Popup from './Popup';
// import axios from 'axios';

const locations = [
{
    name: 'Hollywood Beach',
    longitude: -80.1155,
    latitude: 26.0099
},
{
    name: 'Golden Beach',
    longitude: -80.1223,
    latitude: 25.9651
},
{
    name: 'Sunny Isles Beach',
    longitude: -80.1234,
    latitude: 25.9429
},
{
    name: 'South Beach',
    longitude: -80.1341,
    latitude: 25.7826
},

{
    name: 'Haulover Beach',
    longitude: -80.1244,
    latitude: 25.9066
},
  ]


class MainMap extends Component {

async componentDidMount() {    
    mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGlhbWtvbnRvcyIsImEiOiJjam5iOGRrOGYwMWNzM2tsODQ3a2Zha3Y0In0.vVHRN-Su0kyVhOe8N6KBhg'
    const mapOptions = {
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 9.55,
        center: [-80.1734, 25.9129]
    };
    const geolocationOptions = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
    };
    await this.createMap(mapOptions, geolocationOptions)
}

createMap = (mapOptions, geolocationOptions) => {
    this.map = new mapboxgl.Map(mapOptions);
    const map = this.map;

    map.addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken
    }));

    map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: geolocationOptions,
        trackUserLocation: true
    })
    );

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');

    map.on('load', () => {
    this.fetchPlaces();
    })
}

fetchPlaces = () => {
    const map = this.map;
    locations.forEach((location, i) => {
        let elm = document.createElement('div')
        elm.className = "mapbox-marker"
        
        let popup = new mapboxgl.Popup({ offset: 25})
        .setHTML(ReactDOMServer.renderToStaticMarkup(
            <Popup location={location}></Popup>
        ))
       
        let marker = new mapboxgl.Marker(elm)
        .setLngLat([location.longitude, location.latitude])
        .setPopup(popup)
        marker.addTo(map)
    })
}

flyTo = (location) => {
    this.map.flyTo({
        center: [location.longitude, location.latitude],
        bearing: 20,
        zoom: 12,
        pitch: 20
    })
}

render() {

    const style = {
        width: '100%',
        height: '30em',
        borderRadius: '5%'
    };
    return (
    <div id="map-page">
        <div>
        <div id="location-list">
            <ul>
            {
                locations.map((location, i) => {
                return (
                    <span key={i} onClick={ (e) => { this.flyTo(location) } } ></span>
                    
                )
                })
            }
            </ul>
        </div>
        </div>
        <div>
            <div style={style} ref={el => this.mapContainer = el}></div>
        </div>
    </div>
    )
}

componentWillUnmount() {
    this.map.remove();
}
}


export default MainMap