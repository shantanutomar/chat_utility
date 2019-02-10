import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/actions";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from "@material-ui/icons/Chat";
import socket from "../../socketApi";

const styles = theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#C4B9AF"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
});

class AddMessage extends Component {
  state = {
    value: ""
  };
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  onSubmitClick = event => {
    let messageDtls = {};
    messageDtls.messageText = this.state.value;
    messageDtls.messageAuthor = this.props.currentUser;
    // messageDtls.messageID = "You" + this.state.value;
    socket.emit("addMessage", messageDtls);
    this.props.addMessageToList(messageDtls);
    this.setState({
      value: ""
    });
  };

  onEnterKeyPress = event => {
    if (event.keyCode === 13) {
      let messageDtls = {};
      messageDtls.messageText = this.state.value;
      messageDtls.messageAuthor = this.props.currentUser;
      // messageDtls.messageID = messageDtls.messageAuthor + this.state.value;
      socket.emit("addMessage", messageDtls);
      this.props.addMessageToList(messageDtls);
      this.setState({
        value: ""
      });
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <InputBase
          className={classes.input}
          placeholder="Message"
          onChange={this.handleChange}
          value={this.state.value}
          onKeyDown={this.onEnterKeyPress}
        />
        <IconButton
          className={classes.iconButton}
          aria-label="Enter"
          onClick={this.onSubmitClick}
          disabled={this.state.value === "" ? true : false}
        >
          <ChatIcon />
        </IconButton>
      </Paper>
    );
  }
}

var mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};
var mapDispatchToProps = dispatch => {
  return {
    addMessageToList: messageDtls =>
      dispatch(actions.addMessageToList(messageDtls))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AddMessage));
