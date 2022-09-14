import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  justify-content: center;
  background-color: #edf2f7;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 4px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #805ad5;
  border-radius: 5px;
  background-color: #fff;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 5px;
  background-color: #805ad5;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;
