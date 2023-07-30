import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type ButtonProps = {
  label: string;
  onPress: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>
);
