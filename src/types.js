export type TouchableImageProps = {
  onPress: () => void,
  style?: ?{[attr: string]: any},
  image: any,
}

export type ImageProps = {
  style?: ?{[attr: string]: any},
  image: any,
}

export type CarouselProps = {
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
}
