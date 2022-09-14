import React, {useEffect, useState} from 'react';
import {AddTaskModal} from '../../components/AddTaskModal/AddTaskModal';
import firestore from '@react-native-firebase/firestore';

import {
  ActivityIndicatorContainer,
  ButtonText,
  EmptyTaskText,
  FirebaseContainer,
  NewTaskButton,
  TaskItem,
  TaskItemText,
  Title,
} from './styles.Task';
import {ActivityIndicator, FlatList} from 'react-native';

interface Task {
  username: string;
  title: string;
  id: string;
}

export function Task() {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  function handleOpenModal() {
    setModalVisible(true);
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  useEffect(() => {
    setLoading(true);
    // TODO - Carregar as tarefas
    const subscriber = firestore()
      .collection('tasks')
      .onSnapshot(querySnapshot => {
        const storageTasks: Task[] = [];

        querySnapshot.forEach(documentSnapshot => {
          const data = documentSnapshot.data() as Task;
          const id = documentSnapshot.id;

          const task = {...data, id};
          storageTasks.push(task);
        });

        setTasks(storageTasks);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return (
      <ActivityIndicatorContainer>
        <ActivityIndicator size="large" />
      </ActivityIndicatorContainer>
    );
  }

  return (
    <FirebaseContainer>
      <Title>Minhas tarefas</Title>

      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <TaskItem>
            <TaskItemText>{item.title}</TaskItemText>
          </TaskItem>
        )}
        keyExtractor={({id}) => id}
        ListEmptyComponent={
          <EmptyTaskText>Nenhuma tarefa cadastrada</EmptyTaskText>
        }
      />

      <NewTaskButton onPress={handleOpenModal}>
        <ButtonText>Nova Tarefa</ButtonText>
      </NewTaskButton>
      <AddTaskModal isVisible={modalVisible} onClose={handleCloseModal} />
    </FirebaseContainer>
  );
}
