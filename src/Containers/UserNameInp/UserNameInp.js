import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/actions";
import socket from "../../socketApi";
import DialogContentText from "@material-ui/core/DialogContentText";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  tooltipStyle: {
    backgroundColor: theme.palette.primary.main
  },
  root: {
    backgroundColor: "#4C7A97"
  },
  paper: {
    backgroundColor: "#C4B9AF"
  },
  textStyle: {
    ...theme.typography
  }
});

class UserNameInp extends React.Component {
  state = {
    open: true,
    userName: "",
    isError: false
  };

  isUserNameValid = () => {
    if (this.props.usersList.length > 0) {
      let userNameExists = this.props.usersList.find(ele => {
        return ele.toUpperCase() === this.state.userName.toUpperCase();
      });
      if (userNameExists !== undefined) {
        this.setState({ isError: true });
      } else {
        this.handleUserNameSubmit();
        this.setState({ isError: false });
      }
    } else {
      this.handleUserNameSubmit();
      this.setState({ isError: false });
    }
  };

  handleUserNameSubmit = () => {
    socket.emit("addUser", this.state.userName);
    this.props.handleCurrentUser(this.state.userName);
    this.setState({ open: false });
  };

  handleUserNameChange = event => {
    this.setState({
      userName: event.target.value,
      isError: false
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          open={this.state.open}
          aria-labelledby="form-dialog-title"
          disableBackdropClick={true}
          disableEscapeKeyDown={true}
          classes={{ root: classes.root, paper: classes.paper }}
        >
          <DialogTitle id="form-dialog-title" variant="h6">
            Let's Chat
          </DialogTitle>
          <DialogContent>
            <DialogContentText variant="subtitle1">
              Please enter username to enter chat room
            </DialogContentText>
            <Tooltip
              onClose={this.handleTooltipClose}
              open={this.state.isError}
              title="Username already taken. Please enter other username"
              classes={{ tooltip: classes.tooltipStyle }}
            >
              <TextField
                autoFocus
                autoComplete="off"
                variant="outlined"
                margin="dense"
                id="name"
                placeholder="username"
                type="text"
                fullWidth
                onChange={this.handleUserNameChange}
                required={true}
                error={this.state.isError}
              />
            </Tooltip>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.isUserNameValid}
              color="primary"
              disabled={this.state.userName === ""}
              variant="outlined"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

var mapStateToProps = state => {
  return {
    usersList: state.usersList
  };
};
var mapDispatchToProps = dispatch => {
  return {
    // addUserToList: userName => dispatch(actions.addUserToList(userName)),
    handleCurrentUser: currentUser =>
      dispatch(actions.handleCurrentUser(currentUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UserNameInp));
