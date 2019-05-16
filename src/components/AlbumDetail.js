import React,{Component} from 'react';
import {View, Text, Image} from 'react-native';
import { ViewImageButton, Card, CardSection, Button } from '../common';
import { Actions } from 'react-native-router-flux';
import ComponentStyle from './ComponentStyle'

    const onButtonPress = ({data}) => {
      Actions.imageView({data});
    }

const AlbumDetail = ({data}) => {
    const{ id, author, download_url,url} = data
  return (
    <Card>
        <CardSection>
            <View style={ComponentStyle.thumbnailContainerStyle}>
              <Image style={ComponentStyle.thumbnailStyle} source={{ uri: download_url }} />
            </View>
            <View style={ComponentStyle.imageContentStyle}>
              <View style={ComponentStyle.imageContentStyle}>
                <Text style={ComponentStyle.imageIdStyle}>Id: {id}</Text>
                <Text style={ComponentStyle.authorNameStyle}>Author: {author}</Text>
              </View>
              <ViewImageButton onPress={() => onButtonPress({data})}> View Image Details </ViewImageButton>
            </View>
        </CardSection>
    </Card>
  );
};

export default AlbumDetail;