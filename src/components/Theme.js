import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

// change default theme colours and settings here.

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Source Serif Pro", "serif"].join(","),
  },
  palette: {
    text: {
      secondary: "#FFFFFF",
    },
  },
});

export default theme;
