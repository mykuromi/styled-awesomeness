import "./App.css";

function App() {
  return (
    <>
      <Button danger />
      <Button />
    </>
  );
}

const Button = ({ danger }) => (
  <button
    className={danger ? "button button--danger" : "button button-success"}
  >
    Hello
  </button>
);

export default App;
