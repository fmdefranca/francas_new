import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./pages/Header";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Menu />
      <About />
      <Footer />
    </>
  );
}

export default App;
