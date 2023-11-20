import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SingUp from "./pages/SingUp";
import LogIn from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
    <>
    <AuthContextProvider>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/singup" element={<SingUp/>}/>
    <Route path="/login" element={<LogIn/>}/>
   </Routes>
   </AuthContextProvider>
    </>
  );
}

export default App;
