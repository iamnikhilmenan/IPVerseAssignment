import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {BookDetails} from '../screens/BookDetails';

export type IRootNavigationProps = {};

const Stack = createStackNavigator();

const RootNavigation: React.FC<IRootNavigationProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {RootNavigation};
