import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import AlbumList from './AlbumList';
import { Actions } from 'react-native-router-flux';
import { Header, Button } from '../common';  // importing components from common folder 

// Logout function
  const logout = () =>{
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => Actions.reset('login')}, // Navigate to initial login screen
      ],
      { cancelable: false }
    )
  }

// Main boilerplate 
const DashBoard = () => (
  <View style={{ flex:1}}>
  // Rendering header component
      <Header headerText={"Album List"} /> 
  
  // Rendering albumlist with logout functionality
      <AlbumList />
      <Button onPress={() => logout()} >
         Logout
      </Button>
  </View>
);

export default DashBoard;
