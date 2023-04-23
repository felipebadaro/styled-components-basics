import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import { Header } from "./components/Header";
import { GlobalStyles } from "./components/styles/Globals";

const theme = {
  colors: {
    header: "#ebf",
    body: "#ccc",
    footer: "#003",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
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
