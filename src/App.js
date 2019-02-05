import React, { Component } from "react";
import "./App.css";
import AddMessage from "./Containers/AddMessage/AddMessage";
import Users from "./Containers/Users/Users";
import Messages from "./Containers/Messages/Messages";
// import UserNameInp from "./Containers/UserNameInp/UserNameInp";
import { withStyles } from "@material-ui/core/styles";

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
    margin: "5px"
  },
  addMessageStyle: {
    height: "9%",
    margin: "28px 5px"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        {/* <UserNameInp /> */}
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

export default withStyles(styles)(App);
