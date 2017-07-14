/**
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Modal,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Carousel from 'react-native-carousel-view';
import TouchableImage from './touchable-image';

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      imageIndex: 0,
    };

    (this: any)._onPressImg = this._onPressImg.bind(this);
  }

  _onPressImg(i) {
    console.log('show modal')
    this.setState({
      showModal: true,
      imageIndex: i,
    });
  }

  render() {
    const {images, ...rest} = this.props;
    const {showModal, imageIndex} = this.state;
    return (
      <View>
        <Modal
          visible={showModal}
          transparent={true}>
          <ImageViewer
            imageUrls={images.map((img) => {
              let modifyImg = img;
              if (img.uri) {
                modifyImg = Object.assign({}, img, {url: img.uri});
              }
              return modifyImg;
            })}
            index={imageIndex}/>
        </Modal>
        <Carousel
          {...rest}
          initialPage={imageIndex}
          >
          {
            images.map((img, i) => {
              return (
                <TouchableImage
                  key={i}
                  image={img}
                  onPress={() => this._onPressImg(i)}
                  />
              );
            })
          }
        </Carousel>
      </View>
    );
  }
}
