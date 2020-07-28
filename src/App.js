import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// import sty led from 'styled-components';
import GlobalStyles from "./components/GlobalStyles";

import Header from "./pages/Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <CssBaseline />
      <Header />
    </>
  );
}

export default App;
