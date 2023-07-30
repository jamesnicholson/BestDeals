import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Product } from '../../../types';
import Image from '../../atoms/Image';
import Title from '../../atoms/Title';

interface CardProp {
  product: Product
}
const Card: React.FC<CardProp> = ({ product }) => {
  return (
    <TouchableOpacity onPress={async () => await Linking.openURL(product.url)}>
    <View style={styles.card}>
      <Image source={{ uri: product.img }}  style={{ flex:1, width: "auto", height: 350}} />
      <Title>{product.title}</Title>
      <Title>{product.price.toString()}</Title>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    // style your card here
  },
});

export default Card;
