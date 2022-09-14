import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext/AuthContext';
import DrawerNavigation from './DrawerNavigation';
import {SignIn} from '../screens/SignIn/SignIn';

export default function Router() {
  const {isSignedIn} = useContext(AuthContext);

  return isSignedIn ? <DrawerNavigation /> : <SignIn />;
}
