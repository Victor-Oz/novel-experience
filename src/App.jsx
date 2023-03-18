/** @format */
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
        <AuthContextProvider>
      <NavBar />

        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/about' element={<About />} />
          <Route path='/Account' element={<Protected><Account /></Protected> } />
        </Routes>
        </AuthContextProvider>
    
  
    </>
  );
}

export default App;
