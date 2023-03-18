/** @format */

import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />

        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
 
        </Routes>
       
    
  
    </>
  );
}

export default App;
