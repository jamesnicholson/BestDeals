import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { FlatList, Text } from 'react-native';
import Card from '../../components/molecules/Card';
import { Product } from '../../types';

const GET_ALL_PRODUCTS = gql`
  query Products {
    products {
      id
      img
      url
      title
      price
      oldPrice
      productId
    }
  }
`;

function DealListPage() {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <FlatList<Product>
      data={data.products}
      renderItem={(props) => (
        <Card 
            product={props.item}
          />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default DealListPage;
