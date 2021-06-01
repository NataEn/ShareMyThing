import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  conatiner: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
  imgContainer: {
    display: "inline-block",
    width: "max-content",
    textAlign: "center",
  },
  fileInput: {
    display: "none",
  },
  img: {
    maxWidth: "100px",
    margin: theme.spacing(1),
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    borderRadius: "0.25rem",
  },
  imgButton: {
    borderRadius: "0.25rem",
    padding: theme.spacing(1),
    "&:hover": {
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    },
  },
  imglabel: {
    width: "max-content",
    margin: "0",
    padding: "0",
  },
}));
