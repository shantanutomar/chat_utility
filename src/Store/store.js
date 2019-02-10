import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./Reducers/reducer";
// import storageSession from "redux-persist/lib/storage/session";
// import { persistReducer } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage: storageSession
// };
// const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
