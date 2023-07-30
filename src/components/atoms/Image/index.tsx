import React from 'react';
import { Image as RNImage, ImageProps as RNImageProps } from 'react-native';

type ImageProps = RNImageProps & {
  source: { uri: string };
};

const Image: React.FC<ImageProps> = ({ source, ...props }) => {
  return <RNImage source={source} {...props} />;
};

export default Image;