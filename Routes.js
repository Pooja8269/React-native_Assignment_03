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
              <Scene key="login" component={Login}  initial  hideNavBar={true} />
              <Scene key="dashboard" component={DashBoard} hideNavBar={true}  />
              <Scene key="imageView" component={ImageView} hideNavBar={false} />
          </Scene>
       </Router>
    );
  }
}    

export default Routes;