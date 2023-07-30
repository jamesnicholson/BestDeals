import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Product } from '../../../types';
import Image from '../../atoms/Image';
import Title from '../../atoms/Title';

interface CardProp {
  product: Product
}
const Card: React.FC<CardProp> = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.img }} />
      <Title>{product.title}</Title>
      <Title>{product.price.toString()}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // style your card here
  },
});

export default Card;
