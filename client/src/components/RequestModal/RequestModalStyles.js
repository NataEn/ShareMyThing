import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary1Color,
    color: "white",
    padding: "0 2rem",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { textAlign: "center" },
  flexColumn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  icon: {
    transform: "scale(-1,-1)",
    color: theme.palette.primary2Color,
    fontSize: "5rem",
  },
  name: { textDecoration: "underline" },
  btn: {
    margin: "0",
    padding: theme.spacing(0.5),
  },
  confirmBtn: {
    backgroundColor: theme.palette.primary2Color,

    color: "white",
    "&:hover": { color: theme.palette.primary2Color, backgroundColor: "white" },
  },
  closeBtn: { "&:hover": { color: "#f50057", backgroundColor: "white" } },
}));
