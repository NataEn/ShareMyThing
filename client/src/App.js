import Button from "./components/Button/Button";
import { AppStyled } from "./AppStyled";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <AppStyled className="App">
      <CssBaseline />
      <Button text={"some text"} />
    </AppStyled>
  );
}

export default App;
