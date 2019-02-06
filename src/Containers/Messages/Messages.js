import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Message from "../../Components/Message/Message";
import { connect } from "react-redux";
// import socket from "../../socketApi";
import * as actions from "../../Store/Actions/actions";

const styles = {
  card: {
    height: "100%",
    padding: "10px"
  },
  cardContent: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    overflowWrap: "break-word"
  }
};

class Messages extends Component {
  componentDidMount = () => {
    // socket.on("messagesadded", message => {
    //   console.log("Message received on client :" + message.messageText);
    //   this.props.addMessageToList(message.messageText);
    // });
  };
  render() {
    let messages = null;
    messages =
      this.props.messagesList &&
      this.props.messagesList.map((ele, index) => {
        return (
          <Message
            key={index}
            messageAuthor={ele.messageAuthor}
            messageText={ele.messageText}
          />
        );
      });

    const { classes } = this.props;
    return (
      <Card className={classes.card} raised={true}>
        <span>Messages</span>
        <CardContent className={classes.cardContent}>{messages}</CardContent>
      </Card>
    );
  }
}

var mapStateToProps = state => {
  return {
    messagesList: state.messagesList
  };
};

var mapDispatchToProps = dispatch => {
  return {
    addMessageToList: messageText =>
      dispatch(actions.addMessageToList(messageText))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Messages));
