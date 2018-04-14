/**
 * @flow
 */

import React, {Component} from 'react';
import {ActivityIndicator, View, Image} from 'react-native';
import type {ImageProps} from './types';

export default class ImageWithLoading extends Component {
  props: ImageProps
  state: {
    loading: boolean,
    resizeMode: string
  }

  constructor(props: ImageProps) {
    super(props);

    this.state = {
      loading: false,
    };

    (this: any)._onLoadStart = this._onLoadStart.bind(this);
    (this: any)._onLoadEnd = this._onLoadEnd.bind(this);
  }

  _onLoadStart() {
    this.setState({loading: true});
  }

  _onLoadEnd() {
    this.setState({loading: false});
  }

  render() {
    const {style, source, resizeMode} = this.props;
    const {loading} = this.state;
    return (
      <View style={style}>
        {
          loading ? (
            <ActivityIndicator
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              animating={true}
              />
          ) : undefined
        }
        <Image
          style={loading ? {height: 0, width: 0}: style}
          source={source}
          onLoadStart={this._onLoadStart}
          onLoadEnd={this._onLoadEnd}
          resizeMode={resizeMode ? resizeMode : "contain"}
          />
      </View>
    );
  }
}
