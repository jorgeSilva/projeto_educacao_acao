import './App.css';
import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./login/Login"
import Home from './view/Home';
import { AuthProvider } from './context/authContext';
import { CadProvider } from './context/cadContext';
import { ButtonShowProvider } from './context/buttonShowContext';

function App() {
  return (
    <AuthProvider>
      <CadProvider>
        <ButtonShowProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/home" element={<Home/>}/>
            </Routes>
          </BrowserRouter>
        </ButtonShowProvider>
      </CadProvider>
    </AuthProvider>
  );
}

export default App;
