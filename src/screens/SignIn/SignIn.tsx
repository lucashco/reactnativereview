import React from 'react';

import {Container, Label, Input, Button, ButtonText} from './styles.SignIn';

export function SignIn() {
  return (
    <Container>
      <Label>Insira seu nome:</Label>
      <Input placeholder="Nome" />
      <Button>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
}
