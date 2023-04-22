import { Container } from "./components/styles/Container.styled";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Container>
          <h1>Hello</h1>
        </Container>
      </div>
    </>
  );
}

export default App;
