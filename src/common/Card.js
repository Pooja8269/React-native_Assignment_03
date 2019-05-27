import React from 'react';
import { View } from 'react-native';
import CommonStyle from './CommonStyle' // Importing common styling component

// Created reusable component Card 
const Card = (props) => {
  return (
    <View style={CommonStyle.cardContainerStyle}>
        {props.children}  // Fetching data from parent component using props
    </View>
  );
};

export { Card };
