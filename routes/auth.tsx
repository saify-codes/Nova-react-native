import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './route';

import Dashboard from '../screens/dashboard';

export default function () {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
