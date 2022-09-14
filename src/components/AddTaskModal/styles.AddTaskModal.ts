import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.15);
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 24px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ModalButton = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #805ad5;
`;

export const CloseModalButton = styled(ModalButton)`
  background-color: #dd6b20;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Label = styled.Text`
  color: #222234;
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 8px;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #805ad5;
  margin-bottom: 24px;
`;
