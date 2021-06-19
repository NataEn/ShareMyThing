import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { theme } from "./theme";
import { useStyles } from "./AppStyles";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./pages/Home/Home";
import SharedItem from "./pages/SharedItem/SharedItem";
import Navbar from "./components/Navbar/Navbar";
import ItemForm from "./components/AddItemForm/AddItemForm";
import Copyright from "./components/Copyright/Copyright";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const [status, data] = useFetch("/api/items");
  const [filteredItems, setFilteredItems] = useState();

  useEffect(() => {
    if (status === "loaded") {
      setFilteredItems(data.items);
    }
  }, [status, data]);

  const filterShareHubItems = (searchStr = null) => {
    const items = data.items;
    if (!searchStr | (searchStr.length === 0)) {
      setFilteredItems(items);
    } else {
      const filtered = filteredItems.filter((item) => {
        const matchFromName = item.name ? item.name.match(searchStr) : null;
        const matchFromDescription = item.description
          ? item.description.match(searchStr)
          : null;
        const matchFromInUseBy = item.inUseBy
          ? item.inUseBy.match(searchStr)
          : null;
        const matchFromPublishedBy = item.publishedBy.match(searchStr);

        if (
          matchFromName ||
          matchFromDescription ||
          matchFromInUseBy ||
          matchFromPublishedBy
        ) {
          return item;
        }
      });

      setFilteredItems(filtered);
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
                {filteredItems && <Home items={filteredItems} />}
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
