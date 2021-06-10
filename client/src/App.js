import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { theme } from "./theme";
import { useStyles } from "./AppStyles";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./pages/Home/Home";
import SharedItem from "./pages/SharedItem/SharedItem";
import Navbar from "./components/Navbar/Navbar";
import ItemForm from "./components/AddItemForm/AddItemForm";
import Copyright from "./components/Copyright/Copyright";
import CssBaseline from "@material-ui/core/CssBaseline";

import items from "./items.json";

function App() {
  const [shareHubItems, setShareHubItems] = useState(items);
  const filterShareHubItems = (searchStr = null) => {
    debugger;
    if (!searchStr | (searchStr.length === 0)) {
      return items;
    } else {
      const filteredItems = items.filter((item) => {
        const matchedSearch =
          item.title.match(searchStr) |
          item.description.match(searchStr) |
          item.inUseBy.match(searchStr);
        return matchedSearch.length > 0;
      });
      setShareHubItems(filteredItems);
    }
  };

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <CssBaseline />

        <Router>
          <Navbar filterItems={filterShareHubItems} />
          <div className={classes.main}>
            <Switch>
              <Route exact path="/">
                <Home items={shareHubItems} />
              </Route>
              <Route exact path="/items/addItem">
                <ItemForm />
              </Route>
              <Route exact path="/items/:id">
                <SharedItem />
              </Route>
            </Switch>
          </div>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
