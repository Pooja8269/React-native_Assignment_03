import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import AlbumList from './AlbumList';
import { Actions } from 'react-native-router-flux';
import { Header, Button } from '../common';

  const openConfirm = () =>{
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => Actions.login() },
      ],
      { cancelable: false }
    )
  }
 
const DashBoard = () => (
  <View style={{ flex:1}}>
      <Header headerText={"Album List"} />
      <AlbumList />
      <Button onPress={() => openConfirm()} >
         Logout
      </Button>
  </View>
);

export default DashBoard;