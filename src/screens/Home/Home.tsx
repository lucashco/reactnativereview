import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext/AuthContext';
import {Container, Label, Button, ButtonText} from './styles.Home';

export function Home() {
  const {username, signOut} = useContext(AuthContext);

  return (
    <Container>
      <Label>Seja Bem Vindo {username}</Label>
      <Button onPress={() => signOut()}>
        <ButtonText>Sair</ButtonText>
      </Button>
    </Container>
  );
}
