import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;
const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11) 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Input = styled.input.attrs({
  required: true,
})`
  border-radius: 5px;
  border: none;
  ${awesomeCard};
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Button>Hello</Button>
        <Button danger rotationTime={5}>
          Hello
        </Button>
        <Anchor as={Button} href="http://google.com">
          Go to google
        </Anchor>
        <Anchor2 href="http://google.com">Go to google</Anchor2>
      </Container>
      <Container>
        <Input placeholder="hello" />
      </Container>
    </>
  );
}

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
  ${(props) => {
    if (props.danger) {
      return css`
        animation: ${rotation} ${props.rotationTime}s linear infinite;
      `;
    }
  }}
`;

const Anchor = styled.a`
  text-decoration: none;
`;

const Anchor2 = styled(Button)`
  text-decoration: none;
`;

const rotation = keyframes`
  from {
    transfrom: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default App;
