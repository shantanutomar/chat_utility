import React, { Component } from "react";
import "./App.css";
import AddMessage from "./Containers/AddMessage/AddMessage";
import Users from "./Containers/Users/Users";
import Messages from "./Containers/Messages/Messages";
import UserNameInp from "./Containers/UserNameInp/UserNameInp";
import { withStyles } from "@material-ui/core/styles";
import socket from "./socketApi";
import { connect } from "react-redux";

const styles = theme => ({
  usersSection: {
    width: "30%",
    margin: "5px",
    height: "95%"
  },
  messagesSection: {
    width: "70%"
  },
  messagesStyle: {
    height: "84%",
    margin: "5px",
    marginLeft: "auto"
  },
  addMessageStyle: {
    height: "8%",
    margin: "38px 5px",
    marginLeft: "auto"
  }
});

class App extends Component {
  removeUserBeforeUnload = () => {
    socket.emit("removeUser", this.props.currentUser);
  };

  setupBeforeUnloadListener = () => {
    window.addEventListener("beforeunload", ev => {
      ev.preventDefault();
      return this.removeUserBeforeUnload();
    });
  };

  componentDidMount() {
    this.setupBeforeUnloadListener();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <UserNameInp />
        <section className={classes.usersSection}>
          <Users />
        </section>
        <section className={classes.messagesSection}>
          <section className={classes.messagesStyle}>
            <Messages />
          </section>
          <section className={classes.addMessageStyle}>
            <AddMessage />
          </section>
        </section>
      </div>
    );
  }
}
var mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(App));
