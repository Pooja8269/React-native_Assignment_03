import React from 'react';
import { View } from 'react-native';
import CommonStyle from './CommonStyle' // Importing common styling component

// Created reusable component CardSection 
const CardSection = (props) => {
  return(
      <View style={CommonStyle.cardSectionStyle}>
          {props.children}  // Fetching data from parent component using props
      </View>
  );
};

export { CardSection };
