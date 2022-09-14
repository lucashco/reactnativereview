import React, {useState} from 'react';
import {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext/AuthContext';

import {Container, Label, Input, Button, ButtonText} from './styles.SignIn';

export function SignIn() {
  const {signIn} = useContext(AuthContext);
  const [name, setName] = useState('');

  return (
    <Container>
      <Label>Insira seu nome:</Label>
      <Input
        placeholder="Nome"
        onChangeText={(value: string) => setName(value)}
      />
      <Button onPress={() => signIn(name)}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
}
