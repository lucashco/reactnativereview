import React from 'react';
import AuthProvider from './src/context/AuthContext/AuthContext';
import Router from './src/routes/Router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
