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
import Header from './viewer-header';

type Props = {
  hideIndicators: boolean,
  indicatorColor: string,
  indicatorSize: number,
  inactiveIndicatorColor: string,
  indicatorAtBottom: boolean,
  indicatorOffset: number,
  indicatorText: string,
  inactiveIndicatorText: string,
  width: ?number,
  height: number,
  initialPage: number,
  indicatorSpace: number,
  animate: boolean,
  delay: number,
  loop: boolean,
  contentContainerStyle?: {[attr: string]: any},
  children: any,
  onPageChange?: (number) => void,
  images: any[]
}

export default class ImageCarousel extends Component {
  props: Props
  state: {
    showModal: boolean,
    imageIndex: number,
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: false,
      imageIndex: 0,
    };

    (this: any)._onPressImg = this._onPressImg.bind(this);
    (this: any)._updateIndex = this._updateIndex.bind(this);
    (this: any)._closeModal = this._closeModal.bind(this);
  }

  _onPressImg(i) {
    this.setState({
      showModal: true,
      imageIndex: i,
    });
  }

  _updateIndex(i) {
    this.setState({
      imageIndex: i,
    });
  }

  _closeModal() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const {images, ...rest} = this.props;
    const {showModal, imageIndex} = this.state;
    return (
      <View>
        <Modal
          onRequestClose={this._closeModal}
          visible={showModal}
          transparent={true}>
          <ImageViewer
            renderHeader={() => <Header onClose={() => this._closeModal()}/>}
            onChange={this._updateIndex}
            saveToLocalByLongPress={false}
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
