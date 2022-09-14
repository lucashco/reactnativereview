import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthContextData {
  username: string;
  isSignedIn: boolean;
  signIn: (name: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [username, setUsername] = useState('');

  const isSignedIn = !!username;

  const signIn = async (name: string) => {
    await AsyncStorage.setItem('@username', name);
    setUsername(name);
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('@username');
    setUsername('');
  };

  useEffect(() => {
    async function getUser() {
      const user = await AsyncStorage.getItem('@username');

      if (user) {
        setUsername(user);
      }
    }

    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{username, isSignedIn, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
