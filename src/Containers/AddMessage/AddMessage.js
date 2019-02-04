import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/actions";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from "@material-ui/icons/Chat";

const styles = theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
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

  onEnterKeyPress = event => {
    this.props.addMessageToList(this.state.value);
    this.setState({
      value: ""
    });
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
        />
        <IconButton
          className={classes.iconButton}
          aria-label="Enter"
          onClick={this.onEnterKeyPress}
          disabled={this.state.value === "" ? true : false}
        >
          <ChatIcon />
        </IconButton>
      </Paper>
    );
  }
}

var mapDispatchToProps = dispatch => {
  return {
    addMessageToList: messageText =>
      dispatch(actions.addMessageToList(messageText))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(AddMessage));
