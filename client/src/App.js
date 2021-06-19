import { useEffect } from "react";
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

import { useDispatch } from "react-redux";
import { getItems, getFilterStr } from "./redux/actions/item.actions";
// import items from "./items.json";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  // const filterShareHubItems = (searchStr = null) => {
  //   if (!searchStr | (searchStr.length === 0)) {
  //     setFilteredItems(shareHubItems);
  //   } else {
  //     const filtered = filteredItems.filter((item) => {
  //       const matchFromName = item.name.match(searchStr);
  //       const matchFromDescription = item.description.match(searchStr);
  //       const matchFromInUseBy = item.inUseBy.match(searchStr);
  //       const matchFromPublishedBy = item.publishedBy.match(searchStr);

  //       if (
  //         matchFromName ||
  //         matchFromDescription ||
  //         matchFromInUseBy ||
  //         matchFromPublishedBy
  //       ) {
  //         return item;
  //       }
  //     });

  //     setFilteredItems(filtered);
  //   }
  // };

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <CssBaseline />

        <Router>
          <Navbar />
          <div className={classes.main}>
            <Switch>
              <Route exact path="/">
                {<Home />}
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
