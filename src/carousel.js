/**
 * @flow
 */

import React, {Component} from 'react';
import CarouselView from 'react-native-carousel-view';
import TouchableImage from './touchable-image';

type Props = {
  fromCarousel: boolean,
  images: {uri: string}[],
  onPressImage: (number) => void,
  onPageChange: (number, boolean) => void,
}

export default class Carousel extends Component {
  props: Props
  scrolling: boolean

  constructor(props: Props) {
    super(props);

    this.scrolling = false;
    (this: any)._onScroll = this._onScroll.bind(this);
    (this: any)._setScrollFalse = this._setScrollFalse.bind(this);
    (this: any)._setPageChange = this._setPageChange.bind(this);
  }

  shouldComponentUpdate(nextProps: Props) {
    return !nextProps.fromCarousel;
  }

  _onScroll() {
    this.scrolling = true;
  }

  _setScrollFalse() {
    this.scrolling = false;
  }

  _setPageChange(activeIndex) {
    const {onPageChange} = this.props;
    this._setScrollFalse();
    onPageChange(activeIndex, true);
  }

  render() {
    const {onPressImage, images, ...rest} = this.props;
    return (
      <CarouselView
        {...rest}
        onPageChange={this._setPageChange}
        onScroll={this._onScroll}
        onScrollBegin={this._setScrollFalse}
        >
        {
          /* this.scrolling prevent trigger onPress while is scrolling */
          images.map((img, i) => {
            return (
              <TouchableImage
                key={i}
                image={img}
                onPress={this.scrolling ? () => {} : () => onPressImage(i)}
                />
            );
          })
        }
      </CarouselView>
    );
  }
}
