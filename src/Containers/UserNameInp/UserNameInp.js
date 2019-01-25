import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/actions";

class UserNameInp extends React.Component {
  state = {
    open: true,
    userName: "",
    isButtonDisabled: true
  };

  handleUserNameSubmit = () => {
    this.props.addUserToList(this.state.userName);
    this.setState({ open: false });
  };
  handleUserNameChange = event => {
    this.setState({
      userName: event.target.value,
      isButtonDisabled: false
    });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          aria-labelledby="form-dialog-title"
          disableBackdropClick={true}
          disableEscapeKeyDown={true}
        >
          <DialogTitle id="form-dialog-title">Enter chat room!</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              placeholder="Your name please!"
              type="text"
              fullWidth
              onChange={this.handleUserNameChange}
              required={true}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleUserNameSubmit}
              color="primary"
              disabled={this.state.isButtonDisabled}
            >
              Let's Chat!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

var mapDispatchToProps = dispatch => {
  return {
    addUserToList: userName => dispatch(actions.addUserToList(userName))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserNameInp);
