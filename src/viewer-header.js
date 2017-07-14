/**
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  onClose: () => void,
}

export default class ViewHeader extends Component {
  props: Props

  render() {
    const {onClose} = this.props;
    return (
      <TouchableOpacity
        style={styles.crossContainer}
        onPress={onClose}>
        <Text style={styles.cross}>✕</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  crossContainer: {
    zIndex: 10000,
  },
  cross: {
    position: 'absolute',
    right: 30,
    top: 30,
    color: 'white',
    fontSize: 30,
  },
});
