import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// styles : bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// styles : common
import './index.css';

// app root
import App from './App'

// router
import { BrowserRouter as Router } from 'react-router-dom'

// REACT REDUX
import { Provider } from "react-redux";
// REDUX STORE
import appStore from 'redux/store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
