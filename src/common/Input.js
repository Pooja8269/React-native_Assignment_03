import React from 'react';
import { View, TextInput } from 'react-native';
import CommonStyle from './CommonStyle'

const Input = ({ value, onChangeText, placeholder,secureTextEntry }) => {
  return (
      <View >
        <TextInput 
          style={CommonStyle.inputStyle}
          placeholder={placeholder}
          placeholderTextColor='#b0b1b2'
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText} 
        />
      </View>
  )
}

export { Input };