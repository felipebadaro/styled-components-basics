import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import { Header } from "./components/Header";

const theme = {
  colors: {
    header: "#ebf",
    body: "#c8c",
    footer: "#003",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <div className="App">
          <Container>
            <h1>Hello</h1>
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
