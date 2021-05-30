import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppStyled } from "./AppStyled";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <AppStyled className="App">
      <CssBaseline />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppStyled>
  );
}

export default App;
