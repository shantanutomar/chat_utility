import * as actionTypes from "./actionTypes";
// import socket from "../../socketApi";

export var addMessageToList = messageDtls => {
  return {
    type: actionTypes.ADD_MESSAGE_TO_LIST,
    payLoad: { messageDtls: messageDtls }
  };
};

export var addUserToList = userName => {
  return {
    type: actionTypes.ADD_USER_TO_LIST,
    payLoad: { userName: userName }
  };
};

export var handleCurrentUser = currentUser => {
  return {
    type: actionTypes.ADD_CURR_USER,
    payLoad: { currentUser: currentUser }
  };
};
