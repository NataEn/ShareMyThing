import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
export const theme = createMuiTheme({
  palette: {
    primary1Color: "#1F4E79",
    primary2Color: "#FFC000",
    primary3Color: "#66E655",
    danger: "red",
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
`;
