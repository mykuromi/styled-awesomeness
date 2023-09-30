import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Button>Hello</Button>
        <Button danger>Hello</Button>
        <Anchor as={Button} href="http://google.com">
          Go to google
        </Anchor>
        <Anchor2 href="http://google.com">Go to google</Anchor2>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${(props) => (props.danger ? "#e74c3c" : "#2ecc71")};
`;

const Anchor = styled.a`
  text-decoration: none;
`;

const Anchor2 = styled(Button)`
  text-decoration: none;
`;

export default App;
