import React, { Component } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import Navbar from "./common/Navbar";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}
