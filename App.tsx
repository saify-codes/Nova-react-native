import React from 'react';
import Routes from './routes/route';

import './global.css';
import AuthProvider from './contexts/Authprovider';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
