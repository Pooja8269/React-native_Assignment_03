import React from 'react';
import { Text, View } from 'react-native';
import CommonStyle from './CommonStyle'

const Header = (props) => {
 return (
    <View style={CommonStyle.headerViewStyle}>
        <Text style={CommonStyle.headerTextStyle}> {props.headerText} </Text> 
    </View>
  );
};

export { Header };
