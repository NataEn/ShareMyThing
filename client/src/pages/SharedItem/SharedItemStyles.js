import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    margin: theme.spacing(0.5),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  data: {
    width: "100%",
    margin: theme.spacing(0.5),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  title: {
    display: "block",
    width: "100%",
    textAlign: "center",
  },
}));
