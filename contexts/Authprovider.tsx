import Fullpageloader from '../components/loaders/fullpageloader';
import Auth from '../services/firebase/firebaseAuthService';
import {User} from '../services/firebase/firebaseAuthService.d';
import React, {
  createContext,
  ReactNode,
  useLayoutEffect,
  useState,
} from 'react';

export const AuthContext = createContext<{
  user: User;
  setUser: Function;
} | null>(null);

const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User>(null);
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user: User) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useLayoutEffect(() => Auth.onAuthStateChanged(onAuthStateChanged), []);

  if (initializing) {
    return <Fullpageloader />;
  }

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
