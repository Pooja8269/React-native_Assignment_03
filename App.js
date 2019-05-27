import React, {Component} from 'react';
import RouterFlux from './RouterFlux';

// Application root component app
export default class App extends Component {
  render() {
    return (
      <RouterFlux /> // using RouterFlux component for routing
    );
  }
}
