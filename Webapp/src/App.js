import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./pages/Header";
import Menu from "./pages/Menu";
import About from "./pages/About";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Menu />
      <About />
    </>
  );
}

export default App;
