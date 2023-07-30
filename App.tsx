import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client';
import Deals from './src/pages/Deals';
import { client } from './src/services/apolloClient';
const Stack = createStackNavigator();
const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DealList">
          <Stack.Screen name="DealList" component={Deals} options={{ title: 'Best Deals' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;