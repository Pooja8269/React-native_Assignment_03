import React from 'react';
import { View } from 'react-native';
import CommonStyle from './CommonStyle'

const Card = (props) => {
  return (
    <View style={CommonStyle.cardContainerStyle}>
        {props.children}
    </View>
  );
};

export { Card };