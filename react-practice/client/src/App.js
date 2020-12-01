import React, {useEffect} from "react";
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";
import "./App.css";
import L from 'leaflet';

function App() {
  useEffect(() => {
    // create map
    L.map('map', {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }, []);

  return <div id="map"></div>
}

export default App;