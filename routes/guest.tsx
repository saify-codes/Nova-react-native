import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './route';

import Signin from '../screens/auth/signin';

export default function () {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
}
