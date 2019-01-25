import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/actions";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit.value
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
    if (event.keyCode === 13 && this.state.value) {
      this.props.addMessageToList(this.state.value);
      this.setState({
        value: ""
      });
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <TextField
        id="standard-multiline-flexible"
        label="Enter Message"
        // multiline
        rowsMax="4"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.onEnterKeyPress}
        className={classes.textField}
        margin="normal"
        fullWidth={true}
      />
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
