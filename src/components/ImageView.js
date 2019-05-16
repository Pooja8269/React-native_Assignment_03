import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Button, Card, CardSection } from '../common';
import ComponentStyle from './ComponentStyle';
import Lightbox from 'react-native-lightbox';

const ImageView = ({ data }) => {
      const{ id, author, download_url, url, width, height} = data;
  return (
    <ScrollView>
      <Card>
          <Lightbox>
            <CardSection >
              <Image style={ComponentStyle.fullImageStyle} source={{ uri: download_url }} />
            </CardSection>
          </Lightbox>
          <CardSection>
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
