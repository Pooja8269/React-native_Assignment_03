import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import CommonStyle from './CommonStyle';

const ViewImageButton = ({ onPress,children }) => {
  return (
      <TouchableOpacity onPress={onPress} style={CommonStyle.viewImagebuttonStyle}>
        <Text style={CommonStyle.viewImageButtontextStyle}> 
            {children}
        </Text>
      </TouchableOpacity>
  );
};

export { ViewImageButton };