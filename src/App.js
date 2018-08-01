import React, { Component } from 'react';
import Quakes from './Quakes';
import Map from './Map';





class App extends Component {
  constructor() {
      super();

      this.state = {
        quakes : [],

      }
  }
  getQuakes = async () => {

          try {
              const quakeData = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
              const quakeDataJson = await quakeData.json();
              console.log(quakeDataJson, ' this is the data');
              return quakeDataJson;

          } catch (err) {
              console.log(err, 'error in catch block');
              return err;
          }
      }
      componentDidMount() {
        this.getQuakes().then((quakeData) => {
            this.setState({quakes:quakeData.features});
        })
    }
  render() {
    console.log(this.state);
    return (
      <div className="app">
        <div className="mapContainer">
          <Map/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <Quakes quakes={this.state.quakes}/>
        </div>
      </div>
    );
  }
}

export default App;
