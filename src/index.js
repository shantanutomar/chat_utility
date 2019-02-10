import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./Store/store";
import socket from "../src/socketApi";
import { addMessageToList, addUsersToList } from "./Store/Actions/actions";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4C7A97"
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["'Roboto Mono', monospace;"]
  }
});

socket.on("messageAdded", messageDtls => {
  store.dispatch(addMessageToList(messageDtls));
});
socket.on("userAdded", usersList => {
  store.dispatch(addUsersToList(usersList));
});

// let persistor = persistStore(store);
var app = (
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
    {/* </PersistGate> */}
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
