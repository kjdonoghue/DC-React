import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddBooks from "./components/AddBooks"
import BaseLayout from "./components/BaseLayout"
import Login from "./components/Login"
import Register from "./components/Register"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route component = {Register} path = "/register"/>
          <Route component = {Login} path = "/login"/>
          <Route component = {App} path = "/" exact/>
          <Route component = {AddBooks} path = "/add-book"/>
      </Switch>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
