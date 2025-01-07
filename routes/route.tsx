import {NavigationContainer} from '@react-navigation/native';
import {useLayoutEffect, useState} from 'react';

import AuthStack from './auth';
import GuestStack from './guest';
import Fullpageloader from '../components/loaders/fullpageloader';
import Auth from '../services/firebase/firebaseAuthService';
import type {User} from '../services/firebase/firebaseAuthService.d';

export default function () {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User>(null);

  // Handle user state changes
  function onAuthStateChanged(user: User) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useLayoutEffect(() => Auth.onAuthStateChanged(onAuthStateChanged), []);

  if (initializing) {
    return <Fullpageloader />;
  }

  return (
    <NavigationContainer>
      {user ? <AuthStack /> : <GuestStack />}
    </NavigationContainer>
  );
}
