/**
 * @flow
 */

import React, {Component} from 'react';
import {
  TouchableOpacity,
  Image,
} from 'react-native';
import type {Props} from './types';

export default class TouchableImage extends Component {
  props: Props
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
