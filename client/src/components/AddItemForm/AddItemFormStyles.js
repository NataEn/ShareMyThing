import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  "& > *": {
    margin: theme.spacing(1),
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: theme.spacing(2),
  },
  h6: { textAlign: "center" },
  form: {
    margin: "0 auto",
    width: "60%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  formInput: {
    margin: theme.spacing(2),
  },
}));
