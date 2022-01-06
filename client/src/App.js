import React, { Fragment, useEffect } from 'react';
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
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  },[])

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
