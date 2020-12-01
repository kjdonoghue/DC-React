import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DisplayHeadlines from "./components/DisplayHeadlines"
import DisplaySources from "./components/DisplaySources"
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode> 
    <BrowserRouter>
    <Switch>
        <App >
          {/* <Route component ={DisplaySources} path ="/" exact />
          <Route component = {DisplayHeadlines} path ="/headlines" /> */}
        </App>
        </Switch>
      </BrowserRouter>       
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
