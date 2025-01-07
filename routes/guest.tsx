import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './route';

import Signin from '../screens/auth/signin';
import Signup from '../screens/auth/signup';

export default function () {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
