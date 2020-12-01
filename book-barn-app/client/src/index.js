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
import UpdateBook from "./components/UpdateBook"
import ShoppingCart from "./components/ShoppingCart"
import {createStore} from "redux"
import reducer from "./store/reducer"
import {Provider} from "react-redux"

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        <BaseLayout>
          <Switch>
            <Route component = {Register} path = "/register"/>
            <Route component = {Login} path = "/login"/>
            <Route component = {App} path = "/" exact/>
            <Route component = {AddBooks} path = "/add-book" />
            <Route component = {ShoppingCart} path = "/cart"/>
            <Route component = {UpdateBook} path = "/:id"/>
            
          </Switch>
        </BaseLayout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
