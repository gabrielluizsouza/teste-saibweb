import { GlobalStyle } from "./styles/global.ts";
import { Router } from "./routes/Router"

function App() {
  return (
    <>
      <Router/>
      <GlobalStyle/>
    </>
  );
}

export default App;
