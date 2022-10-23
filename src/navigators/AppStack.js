import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MoviesScreen} from '../components/pages';

const AppStack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen
        name="MoviesScreen"
        component={MoviesScreen}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
