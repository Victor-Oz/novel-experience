import Navbar from "./NavBar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import BackgroundBlob from "./components/blob"
import IntroText from "./components/IntroText"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="blob">
        <BackgroundBlob/>
        </div>
        <IntroText/>
      </div>
    </>
  )
}

export default App