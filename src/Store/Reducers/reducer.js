import * as actionTypes from "../Actions/actionTypes";

var initState = {
  messagesList: [],
  usersList: [],
  currentUser: ""
};

var addMessageToList = (state, action) => {
  return {
    ...state,
    messagesList: [...state.messagesList, action.payLoad.messageDtls]
  };
};

var addUsersToList = (state, action) => {
  return {
    ...state,
    usersList: action.payLoad.usersList
  };
};

var handleCurrentUser = (state, action) => {
  return {
    ...state,
    currentUser: action.payLoad.currentUser
  };
};

var reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE_TO_LIST:
      return addMessageToList(state, action);
    case actionTypes.ADD_USER_TO_LIST:
      return addUsersToList(state, action);
    case actionTypes.ADD_CURR_USER:
      return handleCurrentUser(state, action);
    default:
      return state;
  }
};
export default reducer;
