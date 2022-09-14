import React, {useContext, useState} from 'react';
import {Alert, Modal} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {
  ModalButton,
  CloseModalButton,
  ButtonText,
  Input,
  ModalContent,
  Overlay,
  Label,
} from './styles.AddTaskModal';
import {AuthContext} from '../../context/AuthContext/AuthContext';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export function AddTaskModal({isVisible, onClose}: Props) {
  const [task, setTask] = useState('');

  const {username} = useContext(AuthContext);

  function handleChangeText(text: string) {
    setTask(text);
  }

  function createNewTask() {
    // TODO - Criar uma nova task
    const tasksCollection = firestore().collection('tasks');

    tasksCollection
      .add({
        username,
        title: task,
        created_at: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => Alert.alert('Sucesso', 'Nova tarefa cadastrada.'))
      .catch(() => Alert.alert('Erro', 'Erro ao cadastrar nova tarefa.'));
  }

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent
      onRequestClose={onClose}>
      <Overlay>
        <ModalContent>
          <Label>Nova tarefa</Label>
          <Input
            placeholder="Insira uma nova tarefa"
            onChangeText={handleChangeText}
          />
          <ModalButton onPress={createNewTask}>
            <ButtonText>Adicionar</ButtonText>
          </ModalButton>
          <CloseModalButton onPress={onClose}>
            <ButtonText>Fechar</ButtonText>
          </CloseModalButton>
        </ModalContent>
      </Overlay>
    </Modal>
  );
}
