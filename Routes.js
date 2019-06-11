import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './src/components/Login';
import DashBoard from './src/components/DashBoard';
import ImageView from './src/components/ImageView'

class Routes extends Component  {
  render() {
    return (
        <Router>
          <Scene key="root" >
          // Initial screen
              <Scene key="login" component={Login}  initial  hideNavBar={true} />
          // Dash board screen 
              <Scene key="dashBoard" component={DashBoard} hideNavBar={true}  />
          // Full image view screen
              <Scene key="imageView" component={ImageView} hideNavBar={false} />
          </Scene>
       </Router>
    );
  }
}    

export default Routes;
