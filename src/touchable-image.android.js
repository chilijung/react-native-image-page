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
        pressRetentionOffset={{top: 1, left: 1, bottom: 1, right: 1}}
        background={TouchableNativeFeedback.SelectableBackground()}>
        {
          /*
            Tried with <ImageWidthLoading/> loading effect, but not succeed.
            <TouchableNativeFeedback/> have problem with nested children.
            Don't know why. Need to be fixed.
          */
        }
        <Image
          style={style}
          source={image}
          resizeMode="contain"
          />
      </TouchableNativeFeedback>
    );
  }
}
