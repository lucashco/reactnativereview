import styled from 'styled-components/native';

export const FirebaseContainer = styled.View`
  flex: 1;
  background: #edf2f7;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

export const NewTaskButton = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #805ad5;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const TaskItem = styled.View`
  padding: 12px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 8px;
  border: 1px solid #e2e8f0;
`;

export const TaskItemText = styled.Text`
  font-size: 14px;
`;

export const EmptyTaskText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export const ActivityIndicatorContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #edf2f7;
`;
