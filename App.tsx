import React from 'react';
import {Text} from 'react-native';
import {RootStackParamList} from './App.d';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import './global.css';
import Dashboard from './screens/dashboard';

function App(): React.JSX.Element {
  const isAuthenticated = true;

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
