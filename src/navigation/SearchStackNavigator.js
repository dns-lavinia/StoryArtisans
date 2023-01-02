import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../core/theme';

// Screen imports
import {
  SearchResultScreen,
  SearchScreen
} from '../screens';

const Stack = createStackNavigator();

export default function SearchStackNavigator() {
  return (
    <Stack.Navigator screenOptions={theme.screenOptionStyle}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      {/* <Stack.Screen 
          name="SearchResultScreen" 
          component={SearchResultScreen} 
      /> */}
    </Stack.Navigator>
  );
}
