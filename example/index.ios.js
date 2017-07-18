/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import ImageCarousel from 'react-native-image-page';

export default class example extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ImageCarousel
          height={200}
          delay={2000}
          indicatorSize={10}
          indicatorOffset={-20}
          indicatorText="✽"
          indicatorColor="red"
          renderHeader={(datum, i) => <Text>Header Image {i}</Text>}
          renderFooter={(datum, i) => <Text>Footer {i}</Text>}
          images={[{
            uri: 'https://images.unsplash.com/photo-1456305951335-bb8134aeab8a'
          }, {
            uri: 'https://avatars3.githubusercontent.com/u/7250217?v=4&s=200',
          }, {
            uri: 'https://avatars7.githubusercontent.com/u/1216029?v=4&s=460',
          }, {
            uri: 'https://via.placeholder.com/350x150',
          }, {
            uri: 'https://via.placeholder.com/100x200',
          }]}
          />
      </View>
    );
  }
}

AppRegistry.registerComponent('example', () => example);
