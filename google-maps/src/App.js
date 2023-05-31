import * as React from 'react';
import Map, {NavigationControl,Marker} from 'react-map-gl';
import Navbar from './navbar.js';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>

      {/* Map component */}

      
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: 16.62662018,
          latitude: 49.2125578,
          zoom: 14
        }}
        style={{width: "100%", height: " calc(100vh - 77px)"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=K6yX1laakNBhEN0IulqP"
      >

         {/* Navigation control */}


        <NavigationControl position="top-left" />

         {/* Marker */}

        
        <Marker longitude={16.62662018}
        latitude={49.2125578}
        color='#61dbfb'></Marker>
      </Map>
    </div>
  );
}

export default App;