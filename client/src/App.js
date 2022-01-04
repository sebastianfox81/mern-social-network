import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Landing from './components/Landing.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Alert from './components/Alert.js';
import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <Alert />
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
    </Provider>
  )
}




export default App;
