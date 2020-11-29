import { createMuiTheme } from "@material-ui/core/styles";

// change default theme colours and settings here.

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Source Serif Pro", "serif"].join(","),
  },
  palette: {
    text: {
      secondary: "#FFFFFF",
    },
    background: {
      default: "#ECF0F1",
    },
  },
});

export default theme;
