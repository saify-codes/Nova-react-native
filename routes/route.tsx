import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './auth';
import GuestStack from './guest';
import useAuth from '../contexts/hooks/useAuth';

export default function () {
  
  const {user} = useAuth();

  return (
    <NavigationContainer>
      {user ? <AuthStack /> : <GuestStack />}
    </NavigationContainer>
  );
}
