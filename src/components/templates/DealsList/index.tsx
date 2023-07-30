import React from 'react';
import { View, FlatList } from 'react-native';
import Card from '../../molecules/Card';

export interface Deal {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  oldPrice?: string;
}

interface DealListProps {
  deals: Deal[];
}

const DealList: React.FC<DealListProps> = ({ deals }) => {
  const renderItem = ({ item }: { item: Deal }) => (
    <Card
      price={item.price}
      imageUrl={item.imageUrl}
      title={item.title}
    />
  );

  return (
    <View>
      <FlatList
        data={deals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default DealList;