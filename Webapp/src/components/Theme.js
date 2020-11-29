import { createMuiTheme } from "@material-ui/core/styles";
<<<<<<< HEAD:Webapp/src/components/Theme.js
=======
// import purple from "@material-ui/core/colors/purple";
// import green from "@material-ui/core/colors/green";
>>>>>>> e92d41c797ced822c9288119c962c2038214fc05:src/components/Theme.js

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
