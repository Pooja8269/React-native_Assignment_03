import {Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

const CommonStyle = StyleSheet.create({
  buttontextStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10,
      fontFamily: 'serif'
  },
  buttonStyle: {
      height:40,
      width:width-20,
      backgroundColor: '#03255b',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#03255b',
      marginLeft: 10,
      marginRight: 10,
      marginBottom:10,
      marginTop:10
  },
  cardContainerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      paddingTop: 10,
  },
  cardSectionStyle: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      borderColor: '#ddd',  
  },
  headerTextStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10,
      fontFamily: 'serif'
  },
  headerViewStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#03255b',
      borderWidth: 0.5,
      borderColor: '#03255b',
      marginBottom:5,
      marginTop:5
  },
  inputStyle: {
      width : width-20,
      fontSize: 16,
      color: '#03255b',
      marginLeft:8,
      marginTop:4,
  },
  viewImageButtontextStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 14,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 20,
      fontFamily: 'serif'
  },
  viewImagebuttonStyle: {
      height:40,
      width:150,
      backgroundColor: '#03255b',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#03255b',
      marginLeft: 40,
      marginRight: 20,
      marginBottom:10,
      marginTop:10
  },
});

export default CommonStyle;