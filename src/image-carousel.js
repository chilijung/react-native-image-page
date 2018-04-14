/**
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Modal,
  TouchableHighlight,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Header from './viewer-header';
import Carousel from './carousel';
import ImageWithLoading from './image';

type Props = {
  indicatorAtBottom: boolean,
  indicatorOffset: number,
  images: {uri: string}[],
  renderHeader: ({[key: string]: any}, number) => void,
  renderFooter: ({[key: string]: any}, number) => void,
  scrollThumbs: boolean
}

export default class ImageCarousel extends Component {
  props: Props
  state: {
    showModal: boolean,
    imageIndex: number,
    fromCarousel: boolean,
    scrollThumbs: boolean,
  }

  static defaultProps = {
    renderHeader: () => {},
    renderFooter: () => {},
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: false,
      imageIndex: 0,
      fromCarousel: false,
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

  _updateIndex(i, fromCarousel) {
    this.setState({
      imageIndex: i,
      fromCarousel,
    });
  }

  _closeModal() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const {images, renderHeader, renderFooter,
      indicatorAtBottom, indicatorOffset, scrollThumbs, ...rest} = this.props;
    const {showModal, imageIndex, fromCarousel} = this.state;
    let extraPadding = {};

    if ((typeof indicatorAtBottom === 'undefined' || indicatorAtBottom)
      && indicatorOffset < 0) {
      extraPadding = {paddingBottom: -indicatorOffset};
    } else if (!indicatorAtBottom && indicatorOffset < 0) {
      extraPadding = {paddingTop: -indicatorOffset};
    }

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
        {renderHeader(images[imageIndex], imageIndex)}
        <View style={extraPadding}>
          {(scrollThumbs ?
              <Carousel
                {...rest}
                indicatorOffset={indicatorOffset}
                indicatorAtBottom={indicatorAtBottom}
                images={images}
                initialPage={imageIndex}
                fromCarousel={fromCarousel}
                onPressImage={this._onPressImg}
                onPageChange={this._updateIndex}
                />
            :
              <TouchableHighlight style={{flex:1}} onPress={() => this._onPressImg(0)}>
                <ImageWithLoading style={{
                  flex: 1,
                  width: 10000,
                  height: 10000,
                }} resizeMode="center" source={{uri: images[0].uri }} />
              </TouchableHighlight>
          )}
        </View>
        {renderFooter(images[imageIndex], imageIndex)}
      </View>
    );
  }
}
