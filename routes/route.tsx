import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import Auth from './auth';
import Guest from './guest';
import Fullpageloader from '../components/loaders/fullpageloader';

export default function () {
  const [status, setAuthenticationStatus] = useState('loading');

  useEffect(() => {
    setTimeout(() => {
      setAuthenticationStatus('authenticated');
    }, 3000);
  }, [status]);

  if (status === 'loading') {
    return <Fullpageloader />;
  }

  return (
    <NavigationContainer>
      {status === 'authenticated' ? <Auth /> : <Guest />}
    </NavigationContainer>
  );
}
