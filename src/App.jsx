/** @format */
import { useState } from "react";
import NavBar from "./NavBar";
import Pricing from "./Pricing";
import Home from "./Home";
import About from "./About";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/Home":
      component = <Home />;
      break;
    case "/Pricing":
      component = <Pricing />;
      break;
    case "/About":
      component = <About />;
      break;
  }
  return (
    <div className='App'>
      <NavBar />
      <div className='container'>{component}</div>
    </div>
  );
}

export default App;
