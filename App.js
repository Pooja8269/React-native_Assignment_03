import React, {Component} from 'react';
import Routes from './Routes';

// Root component 
export default class App extends Component {
  render() {
    return (
      <Routes /> // using RouterFlux component for routing
    );
  }
}
