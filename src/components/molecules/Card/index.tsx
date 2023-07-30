import React from 'react';
import { View, StyleSheet } from 'react-native';
import Image from '../../atoms/Image';
import Title from '../../atoms/Title';


interface CardProps {
  imageUrl: string;
  title: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, price }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} />
      <Title>{title}</Title>
      <Title>{price}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // style your card here
  },
});

export default Card;
