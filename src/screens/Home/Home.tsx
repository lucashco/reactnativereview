import React from 'react';
import {Container, Label, Button, ButtonText} from './styles.Home';

export function Home() {
  return (
    <Container>
      <Label>Seja Bem Vindo</Label>
      <Button onPress={() => {}}>
        <ButtonText>Sair</ButtonText>
      </Button>
    </Container>
  );
}
