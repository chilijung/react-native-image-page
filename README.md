# react-native-image-carousel

react-native image carousel, with zoom-pan gestures and full screen support.

## Demo
<table>
  <tr>
    <th>
      Android
    </th>
    <th>
      iOS
    </th>
  </tr>
  <tr>
    <td>
      <img src="./example/android.gif" width="300" style="float: left;">
    </td>
    <td>
      <img src="./example/ios.gif" width="300" style="float: left;">
    </td>
  <tr>
</table>

## Props

Most of the props in `react-native-image-carousel` are inherit from https://github.com/Canner/react-native-carousel-view

```js
type Props = {
  hideIndicators: boolean, // Set to true to hide the indicators
  indicatorColor: string, // Active indicator color
  indicatorSize: number, // Indicator bullet size
  inactiveIndicatorColor: string, // Inactive indicator color
  indicatorAtBottom: boolean, // Set to false to show the indicators at the top
  indicatorOffset: number, // Indicator relative position from top or bottom
  indicatorText: string, // Active indicator content ( You can customize to use any Unicode character )
  inactiveIndicatorText: string, // Inactive indicator content ( You can customize to use any Unicode character )
  width: ?number, // the width of the carousel
  height: number, // the height of the carousel
  initialPage: number, // initial start page
  indicatorSpace: number, // space between each indicator
  animate: boolean, // Enable carousel autoplay
  delay: number, // Set Animation delay between slides
  loop: boolean, // Allow infinite looped animation. Depends on Prop {...animate} set to true.
  contentContainerStyle?: {[attr: string]: any}, // content container style, in `Android` this will pass to ViewPagerAndroid style props, in `iOS` this will pass to ScrollView contentContainerStyle props.
  children: any,
  onPageChange?: (number) => void, // Called when the active page changes
}
```

ImageCarousel props

```js
type ImageCarouselProps = {
  images: {uri: string}[]
}
```

## Example

```js

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import ImageCarousel from 'react-native-image-carousel';

export default class example extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ImageCarousel
          height={200}
          delay={2000}
          indicatorSize={10}
          indicatorOffset={-20}
          indicatorText="✽"
          indicatorColor="red"
          images={[{
            uri: 'https://avatars3.githubusercontent.com/u/7250217?v=4&s=200',
          }, {
            uri: 'https://avatars7.githubusercontent.com/u/1216029?v=4&s=460',
          }, {
            uri: 'https://via.placeholder.com/350x150',
          }, {
            uri: 'https://via.placeholder.com/100x200',
          }]}
          />
      </View>
    );
  }
}

AppRegistry.registerComponent('example', () => example);

```

## See also

based on:

- react-native carousel, support in both Android and iOS

https://github.com/Canner/react-native-carousel-view

## License

Apache 2.0