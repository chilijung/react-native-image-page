/**
 * @flow
 */

import React, {Component} from 'react';
import {
  TouchableOpacity,
  Image,
} from 'react-native';

export default class TouchableImage extends Component {
  render() {
    const {onPress, style, image} = this.props;
    return (
      <TouchableOpacity
        style={style}
        onPress={onPress}>
        <Image
          style={style}
          source={image}
          resizeMode="contain"
          />
      </TouchableOpacity>
    );
  }
}
