
/** @format */

import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import BlobContainer from "./components/BlobContainer";
import IntroText from "./components/IntroText";
import TextSlab from "./components/TextSlab";
import StaticBlob from "./components/StaticBlob";
import NiceQuote from "./components/NiceQuote";
import BottomBackgroundBlob from "./components/BottomMovingBlob";
import NavBar from "./components/NavBar"




function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <BlobContainer/>
        <IntroText />
        <TextSlab />
        <StaticBlob />
        <NiceQuote/>
        <div className='blob'><BottomBackgroundBlob/></div>
      </div>
    </>
  );
}

export default App;
