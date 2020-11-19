import { combineReducers, createStore } from "redux";
import { userReducer, channelReducer } from "./reducers/reducers";


const rootReducer = combineReducers({
    user: userReducer,
    channel: channelReducer
});

const store = createStore(rootReducer);
export default store;