<<<<<<< HEAD
/** @format */

import Navbar from "./components/NavBar";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import BackgroundBlob from "./components/TopMovingBlob";
import IntroText from "./components/IntroText";
import TextSlab from "./components/TextSlab";
import StaticBlob from "./components/StaticBlob";
import NiceQuote from "./components/NiceQuote";
import BottomBackgroundBlob from "./components/BottomMovingBlob";
import BottomTest from "./components/BottomTest";
=======
import Navbar from "./Navbar"
import Pricing from "./Pricing"
import Home from "./Home"
import About from "./About"
import { Route, Routes } from "react-router-dom"
>>>>>>> cfe1c93b6a9dc6586923d669bf85dff7790bb1b0

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className='blob'>
          <BackgroundBlob />
        </div>
        <IntroText />
        <TextSlab />
        <StaticBlob />
        <NiceQuote/>
        <BottomTest/>
        <div className='blob'><BottomBackgroundBlob/></div>
      </div>
    </>
  );
}

export default App;
