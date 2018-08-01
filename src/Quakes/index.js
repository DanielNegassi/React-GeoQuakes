import React, { Component } from 'react';

const Quakes =(props) => {
  console.log(this.props);
// .map creates a new array of all our jsx list items inside a new array
const quakes = props.quakes.map((quake,i) => {
  return(
      <li key={i}>
        {quake.properties.title}
      </li>
  )
});
return(
        <div>
        <h1>Earthquakes from the past week </h1>
        <ul>
            {quakes}
        </ul>
        </div>
  )
};









export default Quakes;
