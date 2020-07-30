import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./pages/Header";
import Album from "./pages/Menu";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Album />
    </>
  );
}

export default App;
