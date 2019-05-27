import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Button, Card, CardSection } from '../common'; // Importing usable components from common folder
import ComponentStyle from './ComponentStyle'; // Importing common styling component
import Lightbox from 'react-native-lightbox';

// Created reusable ImageView component

const ImageView = ({ data }) => {
      const{ id, author, download_url, url, width, height} = data; // Fetching data from parent component 
  return (
    <ScrollView>
      <Card>
      // Rendring image with zoom functionality 
          <Lightbox>
            <CardSection >
               <Image style={ComponentStyle.fullImageStyle} source={{ uri: download_url }} /> 
            </CardSection>
          </Lightbox>
          <CardSection>
        
       // Rendring full image information
            <View style={ComponentStyle.imageViewContentStyle}>
              <Text style={ComponentStyle.idTextStyle}>Id: {id}</Text>
              <Text style={ComponentStyle.authoTextStyle}>Author: {author}</Text>
              <Text style={ComponentStyle.subtextStyle}>Image Width: {width}</Text>
              <Text style={ComponentStyle.subtextStyle}>Image Height: {height}</Text>
              <Text style={ComponentStyle.subtextStyle}>Album Path: {url}</Text>
              <Text style={ComponentStyle.subtextStyle}>Image Path: {download_url}</Text>
            </View>
          </CardSection>
      </Card>
    </ScrollView>
  );
};

export default ImageView;
