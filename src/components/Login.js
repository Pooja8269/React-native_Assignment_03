import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View,ImageBackground,Image, Alert } from 'react-native';
import { Input, Button } from '../common';
import ComponentStyle from './ComponentStyle' 
import Icon from 'react-native-vector-icons/FontAwesome'; 

class Login extends Component {
      constructor(props){
        super(props)
        this.state = { email:"", password :"" } // Initializing user input state  
      }
    
   // validation function to validate data 
      validInput = ( val ) => {
          if(!(/^\S+@\S+$/.test(val))){
            alert("Please enter valid email");
            this.setState({email: ""});
          }else return (val);
      };

// onSubmitData function to validate login and navigate to dash board screen
      onSubmitData()  {
          if (this.state.email == '' || this.state.password == '')
             alert("Please fill out all fields!");
          else if(this.state.email != '' && this.state.password != '' && this.validInput(this.state.email))
             Actions.reset('dashBoard'); // Navigate to dashBoard screen
      }

  // Render method
  render() {
    return (
      <ImageBackground style={ComponentStyle.imageStyle} source={require('./../../assets/bg1.jpg')}>
        <Image style={ComponentStyle.logoStyle} source={require('./../../assets/logo.jpg')} />
          <View style={ComponentStyle.container}>
            <View style={ComponentStyle.inputContainerStyle}>
                <Icon  style={ComponentStyle.iconStyle} name="envelope" size={20}/>
                <Input placeholder= "xyz@abc.com" value={this.state.email}
                  onChangeText={(email) => this.setState({ email })}
                />
            </View>
            <View style={ComponentStyle.inputContainerStyle}>
                <Icon  style={ComponentStyle.iconStyle} name="lock" size={25} />
                <Input secureTextEntry placeholder=  "Password" value={this.state.password}
                  onChangeText={(password) => this.setState({ password })}
                />
            </View>
            <Button  onPress={this.onSubmitData.bind(this)} > Submit </Button>
          </View>
    </ImageBackground>
    );
  }
}

export default Login;
