import * as actionTypes from "../Actions/actionTypes";

var initState = {
  messagesList: [],
  usersList: []
};

var addMessageToList = (state, action) => {
  return {
    ...state,
    messagesList: [...state.messagesList, action.payLoad.messageDtls]
  };
};

var addUserToList = (state, action) => {
  return {
    ...state,
    usersList: [...state.usersList, action.payLoad.userDtls]
  };
};

var reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE_TO_LIST:
      return addMessageToList(state, action);
    case actionTypes.ADD_USER_TO_LIST:
      return addUserToList(state, action);
    default:
      return state;
  }
};
export default reducer;
