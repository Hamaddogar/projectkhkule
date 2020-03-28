import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import { Provider } from "react-redux";
import FormSubmit from "../src/Form/formsubmit";
import ShowData from '../src/Form/ShowData'

import store from '../src/store/configureStore'

import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";


function App() {


  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <BrowserRouter >
          <Route exact path="/" component={FormSubmit} />
          <Route path="/showdata" component={ShowData} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
