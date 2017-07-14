/* eslint-disable new-cap */

/**
 * @flow
 */

import React, {Component} from 'react';
import {
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import type {Props} from './types';

export default class TouchableImage extends Component {
  props: Props
  render() {
    const {onPress, style, image} = this.props;
    return (
      <TouchableNativeFeedback
        style={style}
        onPress={onPress}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <Image
          style={style}
          source={image}
          resizeMode="contain"
          />
      </TouchableNativeFeedback>
    );
  }
}
