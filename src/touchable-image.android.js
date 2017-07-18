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
        background={TouchableNativeFeedback.SelectableBackground()}
        pressRetentionOffset={{top: 1, left: 1, bottom: 1, right: 1}}>
        <Image
          style={style}
          source={image}
          resizeMode="contain"
          />
      </TouchableNativeFeedback>
    );
  }
}
