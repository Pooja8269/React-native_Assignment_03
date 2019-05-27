// Defined all Component folder components styling in single js file 

import {Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

const ComponentStyle = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:40
  },
  inputContainerStyle:{
      alignSelf: 'center',
      height:40,
      width:width-20,
      flexDirection:'row',
      borderColor:'#03255b',
      borderRadius: 50,
      borderWidth: 1,
      marginBottom:40
  },
  iconStyle:{
      marginLeft:10,
      marginTop:6,
      color:'#03255b'
  },
  imageStyle: {
      flex: 1,
      height: height - 0,
      width: width - 0,
  },
  logoStyle: {
      height: 90,
      width:120,
      alignItems:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop:100,
      borderRadius:50,
  },
  imageViewContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft:10,
      paddingRight:10
  },
  idTextStyle: {
      color: '#03255b',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 5,
      paddingBottom: 5,
      fontFamily: 'serif'
  },
  authoTextStyle: {
      color: '#03255b',
      fontSize: 14,
      fontWeight: '600',
      paddingBottom: 5,
      fontFamily: 'serif'
  },
  subtextStyle: {
      color: '#03255b',
      fontSize: 12,
      fontWeight: '400',
      paddingBottom: 5,
      fontFamily: 'serif'
  },
  fullImageStyle: {
      height: 360,
      flex: 1,
      width: 640
  },
  loader:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff"
  },
  imageContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
  },
  imageIdStyle: {
      fontSize: 16,
      alignSelf: 'center',
      color: '#03255b',
      paddingTop: 10,
      paddingBottom: 10,
      fontWeight: '600',
      fontFamily: 'serif'
  },
  authorNameStyle: {
      fontSize: 14,
      alignSelf: 'center',
      color: '#03255b',
      fontFamily: 'serif'
  },
  thumbnailContainerStyle:{
      flex: 1,
      margin: 5,
  },
  thumbnailStyle:{
      width: 150,
      height: 150, 
  },
});

export default ComponentStyle; // Exporting ComponentStyle 
