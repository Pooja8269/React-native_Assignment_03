import React,{Component} from 'react';
import {View, Text, Image} from 'react-native';
import { ViewImageButton, Card, CardSection, Button } from '../common';
import { Actions } from 'react-native-router-flux';
import ComponentStyle from './ComponentStyle'

// Full image dedail function 
    const onImageView = ({data}) => {
      Actions.imageView({data}); //Navigate data to <ImageView> component
    }

// Created reusable component AlbumDetail 
const AlbumDetail = ({data}) => {
    const{ id, author, download_url,url} = data // Fetching parsed data
  return (
       // Rendering all data 
    <Card>
        <CardSection>
            <View style={ComponentStyle.thumbnailContainerStyle}>
      // Rendering image data 
              <Image style={ComponentStyle.thumbnailStyle} source={{ uri: download_url }} /> //
            </View>
      
        // Rendering some of image details 
            <View style={ComponentStyle.imageContentStyle}>
              <View style={ComponentStyle.imageContentStyle}>
                <Text style={ComponentStyle.imageIdStyle}>Id: {id}</Text>
                <Text style={ComponentStyle.authorNameStyle}>Author: {author}</Text>
              </View>
      
       // onImageView function calling 
              <ViewImageButton onPress={() => onImageView({data})}> View Image Details </ViewImageButton>
            </View>
        </CardSection>
    </Card>
  );
};

export default AlbumDetail;
