/**
 * @flow
 */

import React, {Component} from 'react';
import Carousel from 'react-native-carousel-view';
import TouchableImage from './touchable-image';

type Props = {
  fromCarousel: boolean,
  images: {uri: string}[],
  onPressImage: (number) => void,
  onPageChange: (number, boolean) => void,
}


export default class Carosuel extends Component {
  props: Props
  shouldComponentUpdate(nextProps: Props) {
    return !nextProps.fromCarousel;
  }

  render() {
    const {onPressImage, onPageChange, images, ...rest} = this.props;
    return (
      <Carousel
        {...rest}
        onPageChange={(activeIndex) => onPageChange(activeIndex, true)}
        >
        {
          images.map((img, i) => {
            return (
              <TouchableImage
                key={i}
                image={img}
                onPress={() => onPressImage(i)}
                />
            );
          })
        }
      </Carousel>
    );
  }
}
