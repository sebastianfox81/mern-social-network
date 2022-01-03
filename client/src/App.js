import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Landing from './components/Landing.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
      </Fragment>

    </BrowserRouter>

  )
}


export default App;
