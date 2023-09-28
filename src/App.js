import './App.css';
import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./login/Login"
import Home from './view/Home';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
