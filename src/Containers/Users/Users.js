import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import User from "../../Components/User/User";
import { connect } from "react-redux";

const styles = {
  card: {
    height: "100%",
    padding: "10px"
  }
};

class Users extends Component {
  render() {
    console.log(this.props.usersList);
    let users = null;
    users =
      this.props.usersList &&
      this.props.usersList.map((ele, index) => {
        return <User key={index} userName={ele.userName} />;
      });

    const { classes } = this.props;
    return (
      <Card className={classes.card} raised={true}>
        <span>Currently Online</span>
        <CardContent>{users}</CardContent>
      </Card>
    );
  }
}

var mapStateToProps = state => {
  return {
    usersList: state.usersList
  };
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Users));
