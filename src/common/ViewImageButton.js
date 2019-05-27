import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import CommonStyle from './CommonStyle'; // Importing common styling component

// Created reusable component full ViewImageButton 

const ViewImageButton = ({ onPress,children }) => {
  return (
      <TouchableOpacity onPress={onPress} style={CommonStyle.viewImagebuttonStyle}>
        <Text style={CommonStyle.viewImageButtontextStyle}> 
            {children}    // Fetching data from parent component
        </Text>
      </TouchableOpacity>
  );
};

export { ViewImageButton };
