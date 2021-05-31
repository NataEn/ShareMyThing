import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppStyled, theme } from "./AppStyled";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./pages/Home/Home";
import SharedItem from "./pages/SharedItem/SharedItem";
import Navbar from "./components/Navbar/Navbar";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyled className="App">
        <CssBaseline />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/items/:id">
              <SharedItem />
            </Route>
          </Switch>
        </Router>
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
