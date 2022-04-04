import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css";
import Navbar from "./Navbar";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
        <App />
  </React.StrictMode>,
  document.getElementById("root")
);
