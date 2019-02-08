import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./Store/store";
import socket from "../src/socketApi";
import { addMessageToList, addUserToList } from "./Store/Actions/actions";

socket.on("messageAdded", messageDtls => {
  store.dispatch(addMessageToList(messageDtls));
});
socket.on("userAdded", usersList => {
  store.dispatch(addUserToList(usersList));
});

var app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
