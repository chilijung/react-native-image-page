/**
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import ImageWithLoading from './image';
import type {TouchableImageProps} from './types';

export default class TouchableImage extends Component {
  props: TouchableImageProps

  render() {
    const {onPress, style, image} = this.props;
    return (
      <TouchableOpacity
        style={style}
        onPress={onPress}>
        <ImageWithLoading
          style={style}
          source={image}
          />
      </TouchableOpacity>
    );
  }
}
