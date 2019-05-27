import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './src/components/Login';
import DashBoard from './src/components/DashBoard';
import ImageView from './src/components/ImageView'

// Created reusable component router flux
class RouterFlux extends Component  {
  render() {
    return (
        // Routing between screens using key
        <Router>
         <Scene key="root" >
              // login as Initial component
              <Scene key="login" component={Login}  initial  hideNavBar={true} />

              // Route for dashBoard component
              <Scene key="dashBoard" component={DashBoard} hideNavBar={true}  />

              //Route for full imageView detail component
              <Scene key="imageView" component={ImageView} hideNavBar={false} />
          </Scene>
       </Router>
    );
  }
}    

export default RouterFlux;
