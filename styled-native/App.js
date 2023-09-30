import { Text, View } from "react-native";
import styled from "styled-components";

const Conatiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 100px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 32px;
`;

export default function App() {
  return (
    <Conatiner>
      <Title>Hello!</Title>
    </Conatiner>
  );
}
