import React from 'react';
import { Text, View } from 'react-native';
import CommonStyle from './CommonStyle' // Importing common styling component

// Created reusable component Header
const Header = (props) => {
 return (
    <View style={CommonStyle.headerViewStyle}>
  
  // Fetching headerText from parent component using props
        <Text style={CommonStyle.headerTextStyle}> {props.headerText} </Text> 
    </View>
  );
};

export { Header };
