import * as actionTypes from "./actionTypes";

export var addMessageToList = messageText => {
  let messageDtls = {};
  messageDtls.messageText = messageText;
  messageDtls.messageAuthor = "You";
  messageDtls.messageID = "You" + messageText;

  return {
    type: actionTypes.ADD_MESSAGE_TO_LIST,
    payLoad: { messageDtls: messageDtls }
  };
};

export var addUserToList = userName => {
  let userDtls = {};
  userDtls.userID = Math.random();
  userDtls.userName = userName;

  return {
    type: actionTypes.ADD_USER_TO_LIST,
    payLoad: { userDtls: userDtls }
  };
};
