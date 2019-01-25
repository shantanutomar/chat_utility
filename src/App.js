import React, { Component } from "react";
import "./App.css";
import AddMessage from "./Containers/AddMessage/AddMessage";
import Users from "./Containers/Users/Users";
import Messages from "./Containers/Messages/Messages";
import UserNameInp from "./Containers/UserNameInp/UserNameInp";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  addMessageBox: {
    padding: 10
  },
  messagesBox: {
    minHeight: 500
  },
  usersBox: {
    minHeight: 100
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <UserNameInp />
        <Grid
          container
          className={classes.root}
          spacing={8}
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs={3} sm={3} md={3} lg={3} className={classes.usersBox}>
            <Users />
          </Grid>
          <Grid item xs={9} sm={9} md={9} lg={9}>
            <Grid
              container
              className={classes.root}
              spacing={0}
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              <Grid
                item
                xs="auto"
                sm="auto"
                md="auto"
                lg="auto"
                className={classes.messagesBox}
              >
                <Messages />
              </Grid>
              <Grid
                item
                xs="auto"
                sm="auto"
                md="auto"
                lg="auto"
                className={classes.addMessageBox}
              >
                <AddMessage />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
