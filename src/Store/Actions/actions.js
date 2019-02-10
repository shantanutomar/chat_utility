import * as actionTypes from "./actionTypes";
export var addMessageToList = messageDtls => {
  return {
    type: actionTypes.ADD_MESSAGE_TO_LIST,
    payLoad: { messageDtls: messageDtls }
  };
};

export var addUsersToList = usersList => {
  return {
    type: actionTypes.ADD_USER_TO_LIST,
    payLoad: { usersList: usersList }
  };
};

export var handleCurrentUser = currentUser => {
  return {
    type: actionTypes.ADD_CURR_USER,
    payLoad: { currentUser: currentUser }
  };
};
