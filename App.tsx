import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Deals from './src/pages/Deals';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DealList">
        <Stack.Screen name="DealList" component={Deals} options={{ title: 'Best Deals' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;